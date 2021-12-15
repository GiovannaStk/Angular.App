
import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {

  constructor(private route: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'About Me',
      icon: 'favorite',
      routeUrl: '/'
    }

   }

  ngOnInit(): void {
  }

}
