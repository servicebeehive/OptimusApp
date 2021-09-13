export class NetworkDetailModel{
    public fname : string;
    public lname : string;
    public usercode : string;
    public parentcode : string;
    public emailid : string;
    public expandable: boolean;
    public level: number;
    public isExpanded?: boolean;
    public children : NetworkDetailModel[];

    constructor(){
        this.fname = '';
        this.lname = '';
        this.usercode = '';
        this.parentcode = '';
        this.emailid = '';
        this.children = [];
    }
}