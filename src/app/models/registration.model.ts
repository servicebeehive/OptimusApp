export class RegistrationDetail {
    emailaddress: string
    firstname: string
    lastname: string
    pwd:string
    mobilenumber:number
    refcode:string
    constructor() {
      this.emailaddress = '';
      this.firstname = '';
      this.lastname = '';
      this.pwd = '';
      this.mobilenumber = 0;
      this.refcode = '';
    }
  }