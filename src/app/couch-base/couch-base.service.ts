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
export class CouchBaseService {

  constructor(private http: Http) { }

 private extractData(res: Response) {
    
    let data = res.json();
    var details : ConcertDetail;
    var concert : Concert;
    var concertArray : Array<Concert> =  new Array<Concert>();
    var myLength=data.rows.length
     if (myLength==0)
    {
        alert("Error building Observable Array.  No Input Data")
    }
    //alert("Input List: "+myLength);
    for (var row_ndx : number = 0;row_ndx < myLength; row_ndx++)
    {
      details=new ConcertDetail(data.rows[row_ndx].value.Date,data.rows[row_ndx].value.Venue);
      concert= new Concert(data.rows[row_ndx].id,data.rows[row_ndx].key,details);
      concertArray.push(concert);
    }
    if (concertArray.length==0)
    {
        alert("Error building Observable Array.  No Output Data")
    }
    //alert("Output List: "+concertArray.length);
    return concertArray;
  }
 
   getConcerts(): Observable<Concert[]> {
     //const string userName = "cloud2013";
     //const string passWord = "Portal000";
 
      //let _URL="http://bitnami-couchdb-821a.cloudapp.net:5984/deadbase02/_design/concerts/_view/CList2";
      let _URL="http://localhotst:5984/deadbase02/_design/concerts/_view/CList2";
      //let _URL='./ConcertView.json';
      //let nonce = "ZGJyZWFkZXI6cGFzc3dvcmQ=";//bitnami
      let nonce = "Y2xvdWQyMDEzOlBvcnRhbDAwMA==";
      let _Headers = new Headers();
      _Headers.append("Authorization", "Basic " + nonce);
      let dummy : boolean = false;
      if (!dummy){
        alert("Live Data");
        var options = new RequestOptions({headers : _Headers});
        alert(_URL);
        var resp = this.http.get(_URL,new RequestOptions({headers : _Headers})).catch(this.handleError1);
      }else{
        alert("Dead Data");
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
