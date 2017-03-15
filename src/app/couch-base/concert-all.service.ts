import { Injectable } from '@angular/core';
import { Http, Response,  Headers,      Request,   RequestOptions,   RequestOptionsArgs , RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { ConcertView } from './couch-base.class';

@Injectable()
export class ConcertAllService {

   constructor(private http: Http) { }
   get(): Observable<ConcertView[]> {
       //const string userName = "cloud2013";
       //const string passWord = "Portal000";
       let _URL="http://localhost:5984/deadbase02/_design/concerts/_view/all2";
      let nonce = "Y2xvdWQyMDEzOlBvcnRhbDAwMA==";
      let _Headers = new Headers();
      _Headers.append("Authorization", "Basic " + nonce);
     
      //alert("GET");
      return this.http.get(_URL,new RequestOptions({headers : _Headers})).map(response => response.json()).catch(this.getErrorHandler);
       
  
}
 
  private getErrorHandler (error: Response | any) {
  alert("getErrorHandler");
  
  let errMsg: string;
  if (error instanceof Response) {
    errMsg="HTTP-1 Status " + error.status + " Type: " +  error.type +" OK: " + error.ok +" URL: " + error.url + " StatusText: " + error.statusText + " toString(): "+ error.toString();
  } else {
    errMsg="non-HTTP-1 Message: " + error.message;
  }
  alert(errMsg);
  return Observable.throw(errMsg);
}

  
}
