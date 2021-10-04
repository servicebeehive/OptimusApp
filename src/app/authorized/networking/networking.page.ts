import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { NetworkService } from 'src/app/services/network/network.service';
import { ReturnResult } from 'src/app/models/return-result';
import { NetworkDetailModel } from 'src/app/models/network.model';
import { MatTreeNestedDataSource, MatTreeNode, MatNestedTreeNode } from '@angular/material/tree';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { of as observableOf } from 'rxjs';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.page.html',
  styleUrls: ['./networking.page.scss'],
})
export class NetworkingPage implements OnInit {
  public title = 'Networking';
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // TREE_DATA: NetworkDetailModel[] = [];


  treeControl: NestedTreeControl<NetworkDetailModel>;
  dataSourcee: MatTreeNestedDataSource<NetworkDetailModel>;

  constructor(public networkService: NetworkService) {
    this.treeControl = new NestedTreeControl<NetworkDetailModel>(
      this.getChildren
    );
    this.dataSourcee = new MatTreeNestedDataSource();
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.getNewtworkData();
  }

  public getNewtworkData(): void {
    this.networkService
      .getNetworkData()
      .then((result: ReturnResult<NetworkDetailModel[]>) => {
        if (result.success) {
          // this.TREE_DATA = result.data;
          // this.dataSourcee.data = this.TREE_DATA;
          this.dataSourcee.data =  result.data;
          this.treeControl.dataNodes = result.data;
          Object.keys(this.dataSourcee.data).forEach(x => {
            this.setParent(this.dataSourcee.data[x], null);
          });
          this.treeControl.expandAll();
        }
      });
  }

  // getChildren = (node: NetworkDetailModel): NetworkDetailModel[] =>    node.children;

  private getChildren = (node: NetworkDetailModel) => observableOf(node.children);

  // hasChildren = (index: number, node: NetworkDetailModel): boolean =>  node.children.length > 0;

  
  hasChildren = (index: number, node: NetworkDetailModel) => {
    return node.children.length > 0;
  }
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];
  @ViewChildren(MatNestedTreeNode, { read: ElementRef }) nestedTreeNodes: ElementRef[];

    public search:any;

    
  setParent(child:NetworkDetailModel, parent:NetworkDetailModel) {
    // console.log('setParent',data,parent)
    child.parent = parent;
    if (child.children) {
      child.children.forEach(x => {
        this.setParent(x, child);
      });
    }
  }

  setChildOk(text: string, node: NetworkDetailModel[]) {
    // console.log(text);
    // console.log(node);
    this.treeControl.expandAll();
    text=text.toLowerCase();
    node.forEach(x => {
      x.fname=x.fname.toLowerCase();
      x.ok = x.fname.indexOf(text) >= 0;
      // console.log('emailid-',x.emailid,'-', x.ok);
      if (x.parent) {
        // console.log('parent');
        this.setParentOk(text, x.parent, x.ok);
      }
      if (x.children) {
        // console.log('children');
        this.setChildOk(text, x.children);
      }
    });
  }
  setParentOk(text:string, node: NetworkDetailModel, ok:boolean) {
    // console.log('node.ok'+'-'+node.ok)
    node.ok = node.ok || ok || (node.fname.indexOf(text)>=0);
    if (node.parent){
      this.setParentOk(text, node.parent,node.ok);
    }
  }

  // getList2(node: NetworkDetailModel[], result: any = null) {
  //   result = result || {};
  //   node.forEach(x => {
  //     result[x.emailid] = {};
  //     result[x.emailid].ok = x.ok;
  //     if (x.children)
  //       result[x.emailid].children = this.getList2(x.children);
  //   });
  //   return result;
  // }
}
