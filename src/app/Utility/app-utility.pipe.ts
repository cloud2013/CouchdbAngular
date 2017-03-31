import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { couchdbRowClass } from '../couch-base/couch-base.class2'; 
@Pipe({name: 'couchdbSuperFilter'})
export class SuperFilterPipe implements PipeTransform {
  check(arg : any) : boolean
  {
       if (typeof arg === 'undefined') {
        return false;
      }
      if (arg === null) {
          
        return false;
    }
    return true;
  }

  transform(concerts: Array< couchdbRowClass> , YYYY : string,MMDD : string) {
    if (concerts===null){
        return null;
    }
    let transformType : string="";
    
    if ( this.check(YYYY) ){
        if (YYYY.length==4){
          transformType="YYYY";
        }
    }
    if (transformType=="" && this.check(MMDD) ){
     
       if (MMDD.length==4){
          transformType="MMDD";
        }
    }
    
    switch (transformType) {
        case 'YYYY': {
            return concerts.filter( obj => obj.key.Concert.Date.startsWith(YYYY));            
        }
        case 'MMDD': {
          return concerts.filter( obj => obj.key.Concert.Date.substr(4,4)==MMDD);
        }
        default: {
            return concerts;  
        }
    }





     
   
}
}