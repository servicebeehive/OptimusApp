import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NetworkService } from 'src/app/services/network/network.service';
import { ReturnResult } from 'src/app/models/return-result';
import { NetworkDetailModel } from 'src/app/models/network.model';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { TreeFlatNodeModel } from '../../models/tree-node.model';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
@Component({
  selector: 'app-networking',
  templateUrl: './networking.page.html',
  styleUrls: ['./networking.page.scss'],
})
export class NetworkingPage implements OnInit {

  public title: string = "Networking";
  public TREE_DATA: NetworkDetailModel[] = [];
  treeControl: NestedTreeControl<NetworkDetailModel>;


  dataSource: MatTreeNestedDataSource<NetworkDetailModel>;
  constructor(public networkService: NetworkService) { 
    this.treeControl = new NestedTreeControl<NetworkDetailModel>(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = this.TREE_DATA;
  }

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
  getChildren = (node: NetworkDetailModel) => {
    return node.children;
  };
  // private _transformer = (node: NetworkDetailModel, level: number) => {
  //   return {
  //     expandable: !!node.children && node.children.length > 0,
  //     fname: node.fname,
  //     lname: node.lname,
  //     usercode: node.usercode,
  //     parentcode: node.parentcode,
  //     emailid: node.emailid,
  //     isExpanded: node.isExpanded,
  //     children: node.children,
  //     level: level,
  //   };
  // }
  

  // treeControl = new FlatTreeControl<TreeFlatNodeModel>(
  //   node => node.level, node => node.expandable);

  // treeFlattener = new MatTreeFlattener(
  //   this._transformer, node => node.level, node => node.expandable, node => node.children);

  //dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NetworkDetailModel) => node.expandable;
  hasChildren = (index: number, node:NetworkDetailModel) => {
    return node.children.length > 0;
  }
  // hasChild = (_: number, node: NetworkDetailModel) => !!node.children && node.children.length > 0;
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

