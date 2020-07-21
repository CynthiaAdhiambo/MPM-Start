import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './components/star-component/star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './custom-pipes/convert-to-space-pipe';



@NgModule({
  declarations: [StarComponent, ConvertToSpacePipe],
  imports: [
    CommonModule
  ],

  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacePipe
  ]
})
export class SharedModule { }
