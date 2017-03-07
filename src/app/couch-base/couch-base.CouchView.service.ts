import { Injectable } from '@angular/core';
import { Http, Response,  Headers,      Request,   RequestOptions,   RequestOptionsArgs , RequestMethod } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { ConcertView } from './couch-base.class';
import {Concert} from './couch-base.class';
import {ConcertDetail} from './couch-base.class';

@Injectable()
export class CouchViewService {

   constructor(private http: Http) { }

  private extractData(res: Response) {
     var data : ConcertView;
     data = res.json();
     //alert("Got Object: " +data.total_rows);
    return data;
  }
 
   get(): Observable<ConcertView> {
      let _URL="http://bitnami-couchdb-821a.cloudapp.net:5984/deadbase02/_design/concerts/_view/CList2";
      //let _URL='./ConcertView.json';
      let nonce = "ZGJyZWFkZXI6cGFzc3dvcmQ=";
      let _Headers = new Headers();
      _Headers.append("Authorization", "Basic " + nonce);
      let dummy : boolean = true;
      if (!dummy){
        alert("Live Data");
        var options = new RequestOptions({headers : _Headers});
        alert(_URL);
        var resp = this.http.get(_URL,new RequestOptions({headers : _Headers})).catch(this.handleError1);
      }else{
       let _URL='http://localhost:4200/app/concertview.json';
        var resp = this.http.get(_URL).catch(this.handleError1);
      } 
var myResponse=resp.map(this.extractData).catch(this.handleError2);
return myResponse;
}
 
  private handleError1 (error: Response | any) {
  alert("handleError1");
  let errMsg: string;
  if (error instanceof Response) {
    errMsg="HTTP-1 Status " + error.status + " Type: " +  error.type +" OK: " + error.ok +" URL: " + error.url + " StatusText: " + error.statusText + " toString(): "+ error.toString();

  } else {
    errMsg="non-HTTP-1 Message: " + error.message;
  }
  alert(errMsg);
  return Observable.throw(errMsg);
}

private handleError2 (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    errMsg="HTTP-2 Status " + error.status;
  } else {
    errMsg="non-HTTP-2 Message: " + error.message;
  }
  alert(errMsg);
  return Observable.throw(errMsg);
}
  
}
