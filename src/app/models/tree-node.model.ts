import { NetworkDetailModel } from "./network.model";

export interface TreeFlatNodeModel {
    expandable: boolean;
    fname: string;
    level: number;
    isExpanded?: boolean;
    children:NetworkDetailModel[];
  }