import { Injectable } from '@angular/core';
import {ProductCategoryModel} from './product-category-model';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  constructor() { }

  getFurnitureDetails(furnitureList){
    const sofaModel = new ProductCategoryModel();
    sofaModel.categoryName = 'Sofas';
    sofaModel.categoryImg = 'http://appworld.info/wp-content/uploads/2019/02/types-of-sofas-different-types-of-couches-different-styles-of-sofas-types-of-couches-different-types-of-couches-styles-types-of-sofas-styles.jpg';
    sofaModel.startPrice = 200.99;
    furnitureList.push(sofaModel);

    var tableModel = new ProductCategoryModel();
    tableModel.categoryName = 'Tables';
    tableModel.categoryImg = 'https://7esl.com/wp-content/uploads/2017/12/table.jpg';
    tableModel.startPrice = 100.99;
    furnitureList.push(tableModel);

    var tableModel = new ProductCategoryModel();
    tableModel.categoryName = 'Tables';
    tableModel.categoryImg = 'https://7esl.com/wp-content/uploads/2017/12/table.jpg';
    tableModel.startPrice = 100.99;
    furnitureList.push(tableModel);

    var tableModel = new ProductCategoryModel();
    tableModel.categoryName = 'Chairs';
    tableModel.categoryImg = 'https://7esl.com/wp-content/uploads/2017/12/table.jpg';
    tableModel.startPrice = 50.99;
    furnitureList.push(tableModel);

  }

  getElectronicsDetails(){

  }


}
