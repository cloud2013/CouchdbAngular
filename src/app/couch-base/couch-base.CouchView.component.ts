import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CouchViewService } from './couch-base.CouchView.service';
import { ConcertView } from './couch-base.class'; //couchbase package
import {Concert} from './couch-base.class'; //array of concertDetails


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-couch-base-CouchView',
  templateUrl: './couch-base.CouchView.html', 
  styleUrls: ['./couch-base.CouchView.css'],
  providers: [CouchViewService]
})
export class CouchViewComponent implements OnInit {
  public _Total_Rows :   number ;
  public _Offset : number;
 ConcertView: Observable<Concert[]>
   title1 = 'CouchViewComponent';
   title2 ="ConcertView: Observable<Concert[]" ;
  constructor(
    private service: CouchViewService) { }

  ngOnInit() {
//alert("A");//
let data =this.service.get()
       .catch(error => 
      {
        alert("get() Error");
        return Observable.of<ConcertView>();
      }
      );
    this.ConcertView=data.map(object => object.rows);
    data.map( object => object.total_rows).subscribe(val => this._Total_Rows = val);
    data.map( object => object.offset).subscribe(val => this._Offset = val);
         
    //alert("B");
  }
asObservable(subject: Subject<any>) {
     return new Observable(fn => subject.subscribe(fn));

  
 }
 
}
