import { Component, OnInit,Renderer, Inject,ViewChild, ElementRef, Directive , Input} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConcertAllService } from '../concert-all.service';
import { Concert2 } from '../couch-base.class';
import { ConcertView } from '../couch-base.class';
import { SongDetail } from '../couch-base.class';
import {TrackElement} from '../couch-base.class';


import {PlayerService} from '../../audio-player/audio-player.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
 
@Component({
  selector: 'concert-all',
 //pipes: [ByYearFilterPipe],
  templateUrl: './concert-all.component.html',
  styleUrls: ['./concert-all.component.css'],
  providers: [ConcertAllService,PlayerService]
})


export class ConcertAllComponent implements OnInit {
    
   Concerts: Observable<Concert2 []>
   title1 = 'Ladies and Gentlemen...The Grateful Dead';
   selectConcert : Concert2;
   selectSongs : Array<SongDetail>;
   song: TrackElement;
   yearText : string;
   mmddText : string;//=this.getMMDD();
   private onNextCalled : boolean = false;
   public total_rows  :   number ;
   public offset : number;
   public trackSelected : boolean;
   public trackName : string;
   public selectTrackArray : Array<TrackElement>; 
 
  constructor(private service: ConcertAllService, private _playerService: PlayerService) {this.trackSelected=false;  }

  getMMDD() : string  {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var DD : string;
    var MM : string;
  
    DD=dd.toString();
    if(dd<10) {
      DD='0'+dd;
    } 
    MM=mm.toString();
    if(mm<10) {
      MM='0'+mm
    } 
 
  return MM+DD;
  }

   onToggle(){
     this._playerService.toggleAudio();
   }
   onPlay(){
     
    this._playerService.setPlayer(this.song);
    this._playerService.play();
   }

onNextTrack(){
  if (!this.song){
    let t : number = 0;
    if (this.selectTrackArray)
    {
      this.song = this.selectTrackArray[t];
      this.onNext(this.song);
      this.onPlay();
    }
    return;
  }
  let nextTrack : number  = Number( this.song.track); //this is the track number = offset of next track
  if (nextTrack == this.selectTrackArray.length){
            nextTrack=0;
    }
      this.song = this.selectTrackArray[nextTrack];
      this.onNext(this.song);
      this.onPlay();
  }
  
  onStop(){
    this._playerService.pause();
  }
  onShow(){
    alert(" Track: "+this.song.name+ " Track Number: " +this.song.track + " Time: "+this.song.length);
  }

  onSelectTrack(track : TrackElement): void{ 
     if (this.onNextCalled){
       this.onNextCalled=false;
       return;
     }
     this.trackSelected=true;

     this.trackName=track.name;
     this.song=track;
this.onPlay();
    
  

}

    onNext(track : TrackElement): void{ 
     
     this.trackSelected=true;
    
     this.trackName=track.name;
     this.song=track;
     this.onNextCalled=true;
     this.onPlay();
    }

onSelect(concert :Concert2 ): void {
   
  this.selectConcert=concert;
  this.selectTrackArray = new Array<TrackElement>();
  concert.Songs.forEach( obj => {
      let element : TrackElement=new TrackElement(obj.Track,obj.Title,obj.Time,'http://www.archive.org/download',concert.Concert.IAConcertKey,obj.IASongKey);
      this.selectTrackArray.push(element);
  });

  this.trackName=this.selectTrackArray[0].name;
  this.song=this.selectTrackArray[0];
  this.onPlay();

}
ngOnInit() {

 let data =this.service.get()
       .catch(error => 
      {
        alert("get() Error");
        return Observable.of<ConcertView>();
      }
      );
     
    this.Concerts=data.map(object => object.rows);
    data.map( object => object.total_rows).subscribe(val => this.total_rows  = val);
    data.map( object => object.offset).subscribe(val => this.offset = val);
    this._playerService.endEvent.subscribe(t => this.onNextTrack());
    
    //this.onSelect( this.Concerts[0]);
  }
}

