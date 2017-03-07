import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CouchBaseService } from './couch-base.service';
import { ConcertView } from './couch-base.class'; //couchbase package
import {Concert} from './couch-base.class'; //array of concertDetails


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-couch-base',
  templateUrl: './couch-base.component.html',
  styleUrls: ['./couch-base.component.css'],
  providers: [CouchBaseService]
})
export class CouchBaseComponent implements OnInit {
   Concerts: Observable<Concert[]>
   title1 = 'CouchDB works (at Last)!';
   title2 ="Even More Titles" ;
  constructor(
    private service: CouchBaseService) { }

  ngOnInit() {

 this.Concerts =this.service.getConcerts()
      .catch(error => 
      {
        alert("this.service.getConcerts() Error");
        return Observable.of<Concert[]>();
      }
      );
   //alert("this.service.getConcerts() caller"); 
   
  
  }
}
