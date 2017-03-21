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
  constructor() {
    this.audio = new Audio();
  }
  setPlayer(song: TrackElement) {
    this.song.next(song);
    this.audio.src = song.file;
    this.audio.oncanplaythrough = () => {
      this.audio.play();
      /*this.fullTime.next(
        this.audio.duration
      );*/
    };
    this.audio.ontimeupdate = () => {
      /*this.currentTime.next(
        this.audio.currentTime
      );*/
    };
    this.audio.onended = () => {
         //alert(song.name + " as Ended");
         this.endEvent.next(true);
    };
  }
  play(){
    this.audio.play();
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
}
