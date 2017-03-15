import { Component, OnInit,OnDestroy,Renderer, Inject,ViewChild, ElementRef, Directive , Input} from '@angular/core';
import {PlayerService} from './audio-player.service';
import {TrackElement} from '../couch-base/couch-base.class';
 
@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  providers: [PlayerService]
})


export class AudioPlayerComponenet implements OnInit {
  
   @Input() trackElement: TrackElement; 
   // General variables
  public title1 : string;
  private song: TrackElement;
  private currentTime: string;
  private fullTime: string;
  private isPlaying: boolean;
    private songSubscription: any;
  private currentTimeSubscription: any;
  private fullTimeSubscription: any;
  
  constructor(private _playerService: PlayerService) {
    this.title1="hey";
  }
  onPlay(){
    this._playerService.setPlayer(this.song);
    this._playerService.play();
  }
  onStop(){
    this._playerService.pause();
  }
  onShow(){
    alert(" Track: "+this.song.name+ " Track Number: " +this.song.track + " Time: "+this.song.length);
  }

  ngOnInit() {
    this.song=this.trackElement;
    this.song.file=this.song.file;
    this.songSubscription = this._playerService.song.subscribe(data => this.song = data);
    this.currentTimeSubscription = this._playerService.currentTime.subscribe(data => this.currentTime = data);
    this.fullTimeSubscription = this._playerService.fullTime.subscribe(data => this.fullTime = data);
  }

  toggleAudio() {
    this.isPlaying = this._playerService.toggleAudio();
  }

  ngOnDestroy() {
   
    this.songSubscription.unsubscribe();
    this.currentTimeSubscription.unsubscribe();
    this.fullTimeSubscription.unsubscribe();
  }
}

