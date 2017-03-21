import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Concert2 } from '../couch-base.class';
import { ConcertDetail } from '../couch-base.class';
 
@Pipe({name: 'byYearFilter'})
export class ByYearFilterPipe implements PipeTransform {
  transform(concerts: Array<ConcertDetail> , filter : string) {
    let concertfilter :Array<ConcertDetail> = new Array<ConcertDetail>();
    if(filter && filter.length==4){
        alert(filter);
       alert("b");
      concerts.forEach(item => {
            alert("c");
            alert(item.Date);
                if (item.Date.startsWith(filter)){
                alert("HIT");
                concertfilter.push(item);
            }
            } 
            );

      return concertfilter;//.filter(x => x.Concert.Date.startsWith(filter));
    } 
else{
    return concerts;
}
     

  }
}