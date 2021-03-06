import { Component, OnInit, Input } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { MenuItemService } from '../../services/menu-item.service';
import { FoodItem } from '../item-info/foodItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKey: string;
  itemList: FoodItem[];
  filteredItemList: FoodItem[];
  isAdmin: boolean;

  constructor(private _menuItem: MenuItemService) { }

  ngOnInit() {
    // this.isAdmin = this.foodService.isAdmin;
    // if (this.isAdmin) {
    //   this.itemList = this.foodService.getAllFoodItems();
    // }
    // else {
    //   this.itemList = this.foodService.getFoodItems();
    // }

    this._menuItem.getAllMenuItems().subscribe(data => {
      this.itemList = data;
    });
    this.filteredItemList = this.itemList;
  }

  search() {
    // this.filteredItemList = this.itemList.filter(item => item.name.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    // this.foodService.getSubject().next(this.filteredItemList);
    this.filteredItemList = this.itemList.filter(item => item.title.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    this._menuItem.getSubject().next(this.filteredItemList);
  }
}
