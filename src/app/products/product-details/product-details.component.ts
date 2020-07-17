import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/products';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle : string = 'Product Detail';
  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {

    let id = +this.activatedRoute.snapshot.paramMap.get('id'); // Use observables when the ID keeps chnging

    this.pageTitle += `: ${id}`;

    this.product = {
      "productId": id,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
