/*
* Modules
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/*
* Components
*/
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

/*
* Pipes and nested components
*/
import { ConvertToSpacePipe } from './shared/custom-pipes/convert-to-space-pipe';
import { StarComponent } from './shared/components/star-component/star.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { from } from 'rxjs';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardGuard } from './products/product-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id', 
        canActivate: [ProductGuardGuard],
        component: ProductDetailsComponent
      },
      {path: 'welcome', component: WelcomeComponent},
      {path: ' ', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
