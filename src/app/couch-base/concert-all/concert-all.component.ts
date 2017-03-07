import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConcertAllService } from '../concert-all.service';
import { Concert2 } from '../couch-base.class';
import { ConcertView } from '../couch-base.class';

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
  //public rows : Array<Concert>;
   Concerts: Observable<Concert2 []>
   title1 = 'Down To the Very Big Deal!';
   title2 ="Concerts and Songs" ;
  public total_rows  :   number ;
  public offset : number;
  selectConcert : Concert2;
  constructor(
    private service: ConcertAllService) { }

onSelect(concert :Concert2 ): void {
  this.selectConcert=concert;
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

