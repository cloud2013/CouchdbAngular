import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Concert2 } from '../couch-base.class';
import { ConcertDetail } from '../couch-base.class';
import { couchdbRowClass } from '../couch-base.class2'; 
@Pipe({name: 'byYearFilter'})
export class ByYearFilterPipe implements PipeTransform {
  transform(concerts: Array< couchdbRowClass> , filter : string) {
    if(filter && filter.length > 3){
       return concerts.filter( obj => obj.key.Concert.Date.startsWith(filter));
    } 
else{
    return concerts;  
   }
}
}