import { Injectable } from '@angular/core';
import {TrackElement} from '../couch-base/couch-base.class'; 
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class PlayerService {
  private audio: any;
  public song: Subject<TrackElement> = new Subject<TrackElement>();
  public currentTime: Subject<string> = new Subject<string>();
  public fullTime: Subject<string> = new Subject<string>();
  constructor() {
    this.audio = new Audio();
  }
  setPlayer(song: TrackElement) {
    this.song.next(song);
    this.audio.src = song.file;
    this.audio.oncanplaythrough = () => {
      this.audio.play();
      this.fullTime.next(
        this.audio.duration
      );
    };
    this.audio.ontimeupdate = () => {
      this.currentTime.next(
        this.audio.currentTime
      );
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
}
