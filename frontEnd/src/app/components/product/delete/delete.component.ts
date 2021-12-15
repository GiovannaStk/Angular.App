import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.less']
})
export class DeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product  => {
      this.product = product
    })
  }


  deleteProduct(){
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Producto excluido com sucesso')
      this.router.navigate(['/products']) 
    } )
  }


  
  cancel(): void{
    this.router.navigate(['/products']) 
  };

}
