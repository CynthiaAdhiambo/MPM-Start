import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {  RouterModule } from '@angular/router';
import { ProductGuardGuard } from './product-guard.guard';



@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id', 
        canActivate: [ProductGuardGuard],
        component: ProductDetailsComponent
      },
    ])
  ]
})
export class ProductsModule { }
