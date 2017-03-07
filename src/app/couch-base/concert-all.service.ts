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

  /*private extractDataDirect(res: Response) {
     alert("start extractDataDirect");
     var data : ConcertAllView;
     try{
     data = res.json();
     alert("No Error");
    }catch(ex)
    {
        alert("Error In extractDataDirect");
     }
     alert("End extractDataDirect");
    return data;
  }*/


  /*private extractData2(res: Response) {
    alert("In extractData2");
    let data = res.json();
    var details : ConcertDetail;
    var concert : Concert;
    var concertArray : Array<Concert> =  new Array<Concert>();
    var myLength=data.rows.length
    alert(myLength);
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
  }*/
 
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

/*private mapErrorHandler (error: Response | any) {
  alert("mapErrorHandler: map Data");
  
  
 
  let errMsg: string;
  if (error instanceof Response) {
    errMsg="HTTP-2 Status " + error.status;
  } else {
    errMsg="non-HTTP-2 Message: " + error.message;
  }
  alert(errMsg);
  return Observable.throw(errMsg);
}*/
  
}
