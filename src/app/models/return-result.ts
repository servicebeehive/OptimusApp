export class ReturnResult<T = undefined> {

    success: boolean;
    message: string;
    data?: T;

     constructor()
     {
          this.success = false;
          this.message='';
     }

}
