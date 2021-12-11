import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.less']
})
export class ProductCreateComponent implements OnInit {
   atributoLegal ="legal"
  constructor() { }

  ngOnInit(): void {
  }


  
  fazerAlgo(): void {
    console.log('fazendo algo')
  }

}
