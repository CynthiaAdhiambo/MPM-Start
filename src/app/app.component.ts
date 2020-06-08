import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
  <div> 

    <h1>{{pageTitle}}</h1>
    <app-product-list></app-product-list>
    
  </div>
  `
})

export class AppComponent{
  pageTitle: string = "MacMe Product Management"
}