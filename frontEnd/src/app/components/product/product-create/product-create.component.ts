import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
//rota
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.less']
})
export class ProductCreateComponent implements OnInit {

  product: Product ={
    
    name: '',
    price: Number(null),
    discription: ''

  }
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  creatProduct(): void{
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('operação executada com sucesso!');
      this.router.navigate(['/products'])
    })


  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
