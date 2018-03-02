import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { Item } from './item.model';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Headers } from "@angular/http";
import { UserService } from "../../user.service";

 
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

items: Item[] = [];
  

  constructor(private http:Http,private userService:UserService) { }

  ngOnInit() {
    this.getItems();
  }

  deleteItem(item1){ //No longer used
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]==item1){
        this.items.splice(i,1);
      }
    }
  }

  addItem(){ //No longer used
    var id1=((document.getElementById("id1") as HTMLInputElement).value);
    var name1=((document.getElementById("name1") as HTMLInputElement).value);
    var price1=((document.getElementById("price1") as HTMLInputElement).value);
    var createdAt1=((document.getElementById("createdAt1") as HTMLInputElement).value);
    var updatedAt1=((document.getElementById("updatedAt1") as HTMLInputElement).value);
    var sellerName1=((document.getElementById("sellerName1") as HTMLInputElement).value);

  //  var item:Item={_id:null,name:name1,price:parseInt(price1),createdAt:createdAt1,updatedAt:updatedAt1,sellerName:sellerName1};
  //  this.items.push(item);

  }

  getItems(){
    console.log(this.userService.user);
    const headers = new Headers({'x-auth':this.userService.user.token});
    this.http.get('http://localhost:3000/api/product/getProducts',{headers:headers})
    .subscribe((res:Response)=>{
    this.items = res.json().data;
    });
}

add(){
 
    var name1=((document.getElementById("name1") as HTMLInputElement).value);
    var price1=((document.getElementById("price1") as HTMLInputElement).value);
   
    if(name1== '' || price1 == '') {
      alert('Please insert both name and price');
    }
       

   
    var item:Item={_id:null,name:name1,price:parseInt(price1),createdAt:null,updatedAt:null,sellerName:null};
   
  console.log(this.userService.user);
  const headers = new Headers({'x-auth':this.userService.user.token});
  this.http.post('http://localhost:3000/api/product/createProduct',item,{headers:headers})
  .subscribe((res:Response)=>{
   this.getItems(); 
   this.items = res.json().data;
  });
}

delete(item){
console.log(this.userService.user);
const headers = new Headers({'x-auth':this.userService.user.token});
this.http.delete('http://localhost:3000/api/product/deleteProduct/'+item._id+'',{headers:headers})
.subscribe((res:Response)=>{
 this.getItems(); 
 this.items = res.json().data;
});
}



update(item: Item){
  var name1=((document.getElementById("name1") as HTMLInputElement).value);
  var price1=((document.getElementById("price1") as HTMLInputElement).value);
 
  if(name1== '' && price1 == '') {
    alert('Please insert either name or price');
  }
  else{
  if(name1!= '') {
    item.name=name1;
  } 
  if(price1!= '') {
    item.price=parseInt(price1);
  } 
   

  console.log(this.userService.user);
  const headers = new Headers({'x-auth':this.userService.user.token});
  this.http.patch('http://localhost:3000/api/product/updateProduct/'+item._id+'',item,{headers:headers})
  .subscribe((res:Response)=>{
   this.getItems(); 
   
  });
  }
}
}