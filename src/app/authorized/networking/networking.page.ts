import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network/network.service';
import { ReturnResult } from 'src/app/models/return-result';
import { NetworkDetailModel } from 'src/app/models/network.model';
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
  public treeControl: NestedTreeControl<NetworkDetailModel>;


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

  getChildren = (node: NetworkDetailModel): NetworkDetailModel[] => {
    return node.children;
  };

  hasChildren = (index: number, node:NetworkDetailModel): boolean => {
    return node.children.length > 0;
  }


}

