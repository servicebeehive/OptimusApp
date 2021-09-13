import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NetworkService } from 'src/app/services/network/network.service';
import { ReturnResult } from 'src/app/models/return-result';
import { NetworkDetailModel } from 'src/app/models/network.model';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
// const TREE_DATA: ExampleFlatNode[] = [
//   {
//     name: 'Fruit',
//     expandable: true,
//     level: 0,
//   }, {
//     name: 'Apple',
//     expandable: false,
//     level: 1,
//   }, {
//     name: 'Banana',
//     expandable: false,
//     level: 1,
//   }, {
//     name: 'Fruit loops',
//     expandable: false,
//     level: 1,
//   }, {
//     name: 'Vegetables',
//     expandable: true,
//     level: 0,
//   }, {
//     name: 'Green',
//     expandable: true,
//     level: 1,
//   }, {
//     name: 'Broccoli',
//     expandable: false,
//     level: 2,
//   }, {
//     name: 'Brussels sprouts',
//     expandable: false,
//     level: 2,
//   }, {
//     name: 'Orange',
//     expandable: true,
//     level: 1,
//   }, {
//     name: 'Pumpkins',
//     expandable: false,
//     level: 2,
//   }, {
//     name: 'Carrots',
//     expandable: false,
//     level: 2,
//   }
// ];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-networking',
  templateUrl: './networking.page.html',
  styleUrls: ['./networking.page.scss'],
})
export class NetworkingPage implements OnInit {

  public title: string = "Networking";
  public TREE_DATA: NetworkDetailModel[] = [];

  constructor(public networkService: NetworkService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getNewtworkData();
  }

  public getNewtworkData(): void {
    this.networkService.getNetworkData().then((result: ReturnResult<NetworkDetailModel[]>) => {
      if (result.success) {
        this.TREE_DATA = result.data;
        this.dataSource.data = this.TREE_DATA
      }
    })
  }

  private _transformer = (node: NetworkDetailModel, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.fname,
      lname: node.lname,
      usercode: node.usercode,
      parentcode: node.parentcode,
      emailid: node.emailid,
      isExpanded: node.isExpanded,
      children: node.children,
      level: level,
    };
  }


  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NetworkDetailModel) => node.expandable;

  getParentNode(node: NetworkDetailModel) {
    const nodeIndex = this.TREE_DATA.indexOf(node);
    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.TREE_DATA[i].level === node.level - 1) {
        return this.TREE_DATA[i];
      }
    }
    return null;
  }

  shouldRender(node: NetworkDetailModel) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }

}

