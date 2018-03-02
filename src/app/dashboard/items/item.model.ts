export class Item {
  public _id: string 
  constructor( public name: string, public price: number, public createdAt:Date, public updatedAt:string, public sellerName: string ) {}
}
