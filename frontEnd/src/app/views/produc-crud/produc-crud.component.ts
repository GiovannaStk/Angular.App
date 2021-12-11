import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";


@Component({
  selector: 'app-produc-crud',
  templateUrl: './produc-crud.component.html',
  styleUrls: ['./produc-crud.component.less']
})
export class ProducCrudComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

    navigateToProductCreate(): void{

   this.router.navigate(['/products/create'])
    }
}
