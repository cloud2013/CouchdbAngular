export class couchBaseView{
    public total_rows : number;
    public offset : number;
    constructor(_total_rows : number, _offset : number){
      this.total_rows=_total_rows;
      this.offset=_offset;
    }
}
export class couchBaseRow{
  public  id: string;
  public key: string;
  constructor(_id : string, _key : string){
    this.id=_id;
    this.key=_key;
  }
}
export class couchBaseRowKeyBase{
 public _id : string;
 public _rev : string;
 constructor(id: string, rev: string){
   this._id  =id;
   this._rev =rev;
 }
}
export class couchBaseRow2 extends couchBaseRowKeyBase {
  public  id: string;
 constructor(superID : string,rev : string,myID : string){
    super(superID,rev);
    this.id=myID;
  } 
}
export class Concert2 extends couchBaseRow2 {
  public Concert :  ConcertDetail ;
  public Songs : Array<SongDetail>;
  constructor(__id : string, __rev : string, _id : string, _concert : ConcertDetail, _Song : Array<SongDetail>){
    super(__id,__rev,_id);
    this.Concert=_concert;
    this.Songs=_Song;
  }
}
export class ConcertView extends couchBaseView {
    public rows : Array<Concert2>;
    constructor(_total_rows : number, _offset : number,_rows :Array<Concert2> ){
      super(_total_rows,_offset);
      this.rows=_rows;
    }
}   
export class Concert extends couchBaseRow {
  public Concert :  ConcertDetail ;
  public Song : Array<SongDetail>;
  constructor(_id : string, _key : string, _concert : ConcertDetail, _Song : Array<SongDetail>){
    super(_id,_key);
    this.Concert=_concert;
    this.Song=_Song;
  }
}
export class ConcertDetail {
  public Date: string;
  public Venue: string;
  public IAConcertKey: string;
  public SB : boolean;
  public MX : boolean;
  public CM : boolean;
  constructor(_date: string,_Venue: string, iaConcertKey : string , sb:boolean,mx:boolean,cm: boolean ) {
        this.Date=_date;
        this.Venue=_Venue;
        this.CM=cm;
        this.IAConcertKey=iaConcertKey;
        this.MX=mx;
        this.SB=sb;
    }
}
export class SongDetail{
  public IASongKey : string;
  public Track: string;
  public Title: string;
  public Time: string;
  public SongID : string;
}
export class TrackElement{
    public track : string;
    public name : string;
    public length : string;
    public file : string;
    public seconds : number;
    constructor(_track : string,_name : string, _lengthPacked : string,_ArchiveBase : string, _ConcertBase : string, _FileFull : string){
      this.track=_track;
      this.name=_name;
      this.length=_lengthPacked.substring(0,_lengthPacked.length-2)+":"+_lengthPacked.substring(_lengthPacked.length - 2);
      this.file=_ArchiveBase+"/"+_ConcertBase+"/"+_FileFull;
      this.seconds=(Number(_lengthPacked.substring(0,_lengthPacked.length-2)) * 60)+Number(_lengthPacked.substring(_lengthPacked.length - 2));
    }
}
