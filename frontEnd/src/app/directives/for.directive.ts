import { FooterComponent } from './../components/template/footer/footer.component';
import { Directive, Input, OnInit, Component } from '@angular/core';


@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit{

  // @Input('appForEm') numbers: number []

  constructor() {
   
   }

   ngOnInit(): void{
    // console.log(this.numbers)
   }

}
