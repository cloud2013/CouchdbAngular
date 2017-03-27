import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertAllComponent } from './concert-all/concert-all.component';
import { ConcertSelectComponent } from './concert-select/concert-select';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConcertAllComponent,ConcertSelectComponent]
})
export class CouchBaseModule {  }
