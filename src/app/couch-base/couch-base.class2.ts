export class couchdbPayLoadClass{
    public total_rows : number;
    public offset : number;
    public rows : Array<couchdbRowClass>;
}

export class couchdbRowClass{
    public id : string;
    public key : couchdbKeyClass;
}
export class couchdbKeyClass{
    public _id : string;
    public _rev : string;
     public Concert : couchdbConcert;
    public Songs : Array<couchdbSong>;
}

export class couchdbConcert {
  public Date: string;
  public Venue: string;
  public IAConcertKey: string;
  public SB : boolean;
  public MX : boolean;
  public CM : boolean;
  public _id : string;
  constructor(_date: string,_Venue: string, iaConcertKey : string , sb:boolean,mx:boolean,cm: boolean, id : string ) {
        this.Date=_date;
        this.Venue=_Venue;
        this.CM=cm;
        this.IAConcertKey=iaConcertKey;
        this.MX=mx;
        this.SB=sb;
        this._id=id;
    }
}

export class couchdbSong{
  public IASongKey : string;
  public Track: string;
  public Title: string;
  public Time: string;
  public SongID : string;
}



// export class couchBaseView{
//     public total_rows : number;
//     public offset : number;
//     constructor(_total_rows : number, _offset : number){
//       this.total_rows=_total_rows;
//       this.offset=_offset;
//     }
// }

// export class ConcertView extends couchBaseView {
//     public rows : Array<Concert2>;
//     constructor(_total_rows : number, _offset : number,_rows :Array<Concert2> ){
//       super(_total_rows,_offset);
//       this.rows=_rows;
//     }
// }   


// export class couchBaseRowKeyBase{
//  public _id : string;
//  public _rev : string;
//  constructor(id: string, rev: string){
//    this._id  =id;
//    this._rev =rev;
//  }
// }
// export class couchBaseRow2 extends couchBaseRowKeyBase {
//   public  id: string;
//  constructor(superID : string,rev : string,myID : string){
//     super(superID,rev);
//     this.id=myID;
//   } 
// }
// export class Concert2 extends couchBaseRow2 {
//   public Concert :  ConcertDetail ;
//   public Songs : Array<SongDetail>;
//   constructor(__id : string, __rev : string, _id : string, _concert : ConcertDetail, _Song : Array<SongDetail>){
//     super(__id,__rev,_id);
//     this.Concert=_concert;
//     this.Songs=_Song;
//   }
// }

// export class ConcertDetail {
//   public Date: string;
//   public Venue: string;
//   public IAConcertKey: string;
//   public SB : boolean;
//   public MX : boolean;
//   public CM : boolean;
//   constructor(_date: string,_Venue: string, iaConcertKey : string , sb:boolean,mx:boolean,cm: boolean ) {
//         this.Date=_date;
//         this.Venue=_Venue;
//         this.CM=cm;
//         this.IAConcertKey=iaConcertKey;
//         this.MX=mx;
//         this.SB=sb;
//     }
// }

// export class SongDetail{
//   public IASongKey : string;
//   public Track: string;
//   public Title: string;
//   public Time: string;
//   public SongID : string;
// }