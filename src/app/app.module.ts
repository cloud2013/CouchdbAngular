import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CouchBaseModule } from './couch-base/couch-base.module';
/*import { CouchBaseComponent } from './couch-base/couch-base.component';
import { CouchBaseService} from './couch-base/couch-base.service';*/
//app-couch-base-CouchView
import { ConcertAllComponent} from './couch-base/concert-all/concert-all.component';
import { ConcertAllService} from './couch-base/concert-all.service';

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
  providers: [ConcertAllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
