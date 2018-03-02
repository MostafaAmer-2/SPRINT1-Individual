import { Component, OnInit, Input } from '@angular/core';
import { Item } from  '../item.model';
import { ItemsComponent } from  '../items.component';
@Component({
  selector: 'app-items-item',
  templateUrl: './items-item.component.html',
  styleUrls: ['./items-item.component.scss']
})
export class ItemsItemComponent extends ItemsComponent implements OnInit {

  @Input('currentItem') item;
 // @Input('currentItemComponent') ItemsComponent;

  //constructor

  ngOnInit() {
  }

  deleteItem(item1){
    super.deleteItem(item1)
  }

}
