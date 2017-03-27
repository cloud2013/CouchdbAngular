import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';
import { AppComponent } from './app.component';
import { CouchBaseModule } from './couch-base/couch-base.module';
import { ConcertAllComponent} from './couch-base/concert-all/concert-all.component';
import { ConcertAllService} from './couch-base/concert-all.service';
import {PlayerService} from './audio-player/audio-player.service';
import {ByYearFilterPipe} from './couch-base/concert-all/concert-all.ByYearTransform';
import {SuperFilterPipe} from './Utility/app-utility.pipe';
import { ConcertSelectComponent } from './couch-base/concert-select/concert-select';
@NgModule({
  declarations: [
    AppComponent,
    ConcertAllComponent,
    ConcertSelectComponent,
    ByYearFilterPipe,
    SuperFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [ConcertAllService,PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
