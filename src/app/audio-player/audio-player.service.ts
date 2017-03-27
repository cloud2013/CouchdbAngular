import { Injectable } from '@angular/core';
import {TrackElement} from '../couch-base/couch-base.class'; 
import { Subject }    from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class PlayerService {
  private audio: HTMLAudioElement;
  public song: Subject<TrackElement> = new Subject<TrackElement>();
  public currentTime: Subject<string> = new Subject<string>();
  public fullTime: Subject<string> = new Subject<string>();
  public endEvent : Subject<boolean> = new BehaviorSubject(false);
  public songTitle : string;
  constructor() {
    this.audio = new Audio();
  }
  setPlayer(song: TrackElement) {
    if (song.file===this.audio.src){
      console.log("audio-player::setPlayer Duplicate Call: "+song.name);
      return;
    }
    console.log(song.name);
    if (this.isOn()){
      this.audio.pause();
      console.log("audio-player::Audio Has Been Paused: "+!this.isOn());
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
   
      if (!this.isOn()){
        this.audio.play();
      }
    
  }
  pause(){
    this.audio.pause();
  }
  toggleAudio() {
    if (this.audio.paused) {
        this.audio.play();
    } else {
      this.audio.pause();
    }
    return this.audio.paused;
  }
  review()
  {
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
    return this.audio.src;
  }
  name(): string{
    return this.songTitle;
  }
}
