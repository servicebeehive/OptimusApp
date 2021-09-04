import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title='Home'
  constructor(public homeServices:HomeService) {}

  ngOnInit(): void {
    this.homeServices.getListItem()
  }

}
