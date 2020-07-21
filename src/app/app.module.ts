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
/*
* Pipes and nested components
*/

import { WelcomeComponent } from './home/welcome.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {path: 'welcome', component: WelcomeComponent},
      {path: ' ', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
    ProductsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
