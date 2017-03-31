import { Injectable } from '@angular/core';
import {TrackElement} from '../couch-base/couch-base.class'; 
import { Subject }    from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class PlayerService {
  public audio: HTMLAudioElement;
  public song: Subject<TrackElement> = new Subject<TrackElement>();
  public currentTime: Subject<string> = new Subject<string>();
  public fullTime: Subject<string> = new Subject<string>();
  public endEvent : Subject<boolean> = new BehaviorSubject(false);
  public songTitle : string;
  constructor() {
    this.audio = new Audio();
     //console.log("audio Constructor");
            //this.audio.addEventListener("timeupdate", ()=>this.updateProgress());
           
  }
    setPlayer(song: TrackElement) {
    console.log("audio-player.service::setPlayer("+song.name+")");
    if (song.file===this.audio.src){
      console.log("warn. audio-player::setPlayer Duplicate Call: "+song.name);
      return;
    }
    console.log('audio-player.service::SetPlayer: '+song.name);
    if (this.isOn()){
      this.audio.pause();
    }
    this.song.next(song);
    this.songTitle=song.name;
    this.audio.src = song.file;
    this.audio.oncanplaythrough = () => {
    };
    this.audio.onended = () => {
         this.endEvent.next(true);
    };
  }
  play(){
   //console.log("audio-player.service::player");
      if (!this.isOn()){
        this.audio.play();
      }
    
  }
  pause(){
    //console.log("audio-player.service::pause");
    this.audio.pause();
  }
  toggleAudio() {
    //console.log("audio-player.service::toggleAudio");
    if (this.audio.paused) {
        this.audio.play();
    } else {
      this.audio.pause();
    }
    return this.audio.paused;
  }
  review()
  {
    //console.log("audio-player.service::review");
      this.audio.onended
    
  }
  isOn() : boolean
  {
    if (this.audio.paused){
      return false;
    }
    return true;
  }
  src() : string {
    //console.log("audio-player.service::src");
    return this.audio.src;
  }
  name(): string{
    //console.log("audio-player.service::name");
    return this.songTitle;
  }
  
    /*updateProgress(){
      console.log("B "+this.audio.currentTime); 
    }*/
}
