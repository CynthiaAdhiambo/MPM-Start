import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/products';
import { ProductsService } from '../product.service';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle : string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  imageWidth: number = 200;
  imageMargin: number = 2;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router : Router,
    private productService: ProductsService) { }

  ngOnInit() {

  //  let id = +this.activatedRoute.snapshot.paramMap.get('id'); // Use observables when the ID keeps chnging
   
    //this.pageTitle += `: ${id}`;

    const param = +this.activatedRoute.snapshot.paramMap.get('id')
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
