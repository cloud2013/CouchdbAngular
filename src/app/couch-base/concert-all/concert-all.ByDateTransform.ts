import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Concert2 } from '../couch-base.class';
import { ConcertDetail } from '../couch-base.class';
import { couchdbRowClass } from '../couch-base.class2'; 
@Pipe({name: 'byDatePipe'})
export class ByDatePipe implements PipeTransform {
  transform(concerts: Array< couchdbRowClass> , filter : string) {
    if (!filter){
        return concerts;
    }
    if (filter.length < 4){
        return concerts;
    }
    if (filter.length === 4){
        if (filter.substr(0,2)==='19'){
                //its a year 19XX
                return concerts.filter( obj => obj.key.Concert.Date.startsWith(filter));
        }else{
            //its a MMDD
                return concerts.filter( obj => obj.key.Concert.Date.substr(4,4)===filter);
        }
    }else{
        // > 4
        return concerts.filter( obj => obj.key.Concert.Date.startsWith(filter));
    }

}
}