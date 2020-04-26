/*
* Modules
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
