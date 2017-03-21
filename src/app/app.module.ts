import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CouchBaseModule } from './couch-base/couch-base.module';
import { ConcertAllComponent} from './couch-base/concert-all/concert-all.component';
import { ConcertAllService} from './couch-base/concert-all.service';
import {PlayerService} from './audio-player/audio-player.service';

@NgModule({
  declarations: [
    AppComponent,
    ConcertAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConcertAllService,PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
