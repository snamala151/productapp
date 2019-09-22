import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginModule } from './login/login.module';
import {LoginComponent} from './login/login/login.component';
import {ProductModule} from './product/product.module';
import {ProductlistComponent} from './product/productlist/productlist.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    LoginModule,
    RouterModule.forRoot(routes), ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
