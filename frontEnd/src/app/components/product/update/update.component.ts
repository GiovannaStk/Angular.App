import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})
export class UpdateComponent implements OnInit {

  product!: Product
  constructor(private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const id =  +this.route.snapshot.paramMap.get('id') 
    this.productService.readById(id).subscribe(product => {
      this.product = product
   
    });
  };




  
  updateProduct(): void{
    this.productService.update(this.product).subscribe(() =>  {
      this.productService.showMessage('Produto Alterado com sucesso!!')
      this.router.navigate(['/products'])
    });

  };

  cancel(): void{
    this.router.navigate(['/products']) 
  };
}
