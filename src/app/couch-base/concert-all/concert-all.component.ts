import { Component, OnInit,Renderer, Inject,ViewChild, ElementRef, Directive , Input} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConcertAllService } from '../concert-all.service';
import { Concert2 } from '../couch-base.class';
import { ConcertView } from '../couch-base.class';
import { SongDetail } from '../couch-base.class';
import {TrackElement} from '../couch-base.class';
import {AudioPlayerComponenet} from '../../audio-player/audio-player.component';
import {PlayerService} from '../../audio-player/audio-player.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
 
@Component({
  selector: 'concert-all',
  templateUrl: './concert-all.component.html',
  styleUrls: ['./concert-all.component.css'],
  providers: [ConcertAllService]
})


export class ConcertAllComponent implements OnInit {
    
   Concerts: Observable<Concert2 []>
   title1 = 'Down To the Very Big Deal!';
   title2 ="Concerts and Songs" ;
  public total_rows  :   number ;
  public offset : number;
  public trackSelected : boolean;
  public trackName : string;
  public trackObject : TrackElement;
  public audioComponenet : AudioPlayerComponenet;
  public playerService : PlayerService;
  selectConcert : Concert2;
  selectSongs : Array<SongDetail>;
  selectTrackArray : Array<TrackElement>; 
  constructor(private service: ConcertAllService) {

    this.trackSelected=false;
   }
    
  onSelectTrack(track : TrackElement): void{ 
     
     this.trackSelected=true;
     this.trackName=track.name;
     this.trackObject=track;
     
    //  let sTrack=new Subject<TrackElement>();
    //  sTrack.map(data => data = track);
    //  this.playerService=new PlayerService();
    //  this.playerService.song=sTrack;
    //  this.audioComponenet=new AudioPlayerComponenet(this.playerService   );
    //  this.audioComponenet.toggleAudio();
     
    }
onSelect(concert :Concert2 ): void {
  this.selectConcert=concert;
  this.selectTrackArray = new Array<TrackElement>();
  concert.Songs.forEach( obj => {
      let element : TrackElement=new TrackElement(obj.Track,obj.Title,obj.Time,'http://www.archive.org/download',concert.Concert.IAConcertKey,obj.IASongKey);
      this.selectTrackArray.push(element);
  });
   
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
   
  }
}

