import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductbaseComponent } from './productbase/productbase.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login/login.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import {ProductcategoryService} from './productcategory.service';
import { SofasComponent } from './sofas/sofas.component';
import { TablesComponent } from './tables/tables.component';

// @ts-ignore
const routes: Routes = [
  { path: 'products', component: ProductbaseComponent,
    children: [
      { path: 'productlist' , component: ProductlistComponent},
      { path: 'furniture' , component: FurnitureComponent},
      { path: 'electronics' , component: ElectronicsComponent},
      { path: 'sofas' , component: SofasComponent},
      { path: 'tables' , component: TablesComponent}

    ]
  }
];

@NgModule({
  declarations: [ProductlistComponent, ProductbaseComponent, FurnitureComponent, ElectronicsComponent, SofasComponent, TablesComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers:[ProductcategoryService]
})
export class ProductModule { }
