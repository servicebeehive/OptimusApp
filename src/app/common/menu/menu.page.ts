import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(public menu: MenuController, public router: Router) {}

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, 'sidemenu');
    this.menu.open('sidemenu');
  }

  openEnd() {
    this.menu.open('end');
  }
  bankDetail() {
    this.router.navigate(['authorized/account-setting']);
    this.menu.close();
  }
}
