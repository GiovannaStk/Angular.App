import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.less']
})
export class ReadComponent implements OnInit {

  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'discription', 'action' ]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      
    })
  }

}
