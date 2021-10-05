import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, public router: Router) {}
  openFirst() {
    this.menu.enable(true, 'sidemenu');
    this.menu.open('sidemenu');
  }

  openEnd() {
    this.menu.open('end');
  }
  bankDetail(){
    this.router.navigate(['authorized/account-setting'])
    this.menu.close();
  }
}
