import { Component, OnInit } from '@angular/core';
import {ProductCategoryModel} from '../product-category-model';
import {ProductcategoryService} from '../productcategory.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  furnitureList: ProductCategoryModel[] = [];

  constructor(private prodctCatService: ProductcategoryService, private router: Router) { }

  ngOnInit() {
    this.prodctCatService.getFurnitureDetails(this.furnitureList);
  }

  onProductCategoryClick(categoryName){
       if(categoryName == 'Sofas') {
         this.router.navigate(['/products/sofas']);
       }
       else if(categoryName == 'Tables'){
         this.router.navigate(['/products/tables']);
       }
  }

}
