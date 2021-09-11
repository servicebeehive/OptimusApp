import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-optimus',
  templateUrl: './why-optimus.page.html',
  styleUrls: ['./why-optimus.page.scss'],
})
export class WhyOptimusPage implements OnInit {
  public title : string ='Why Optimus'
  public headcolor: string ='primary'
  constructor() { }

  ngOnInit() {
  }

}
