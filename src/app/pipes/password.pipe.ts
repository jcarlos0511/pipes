import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "password"
})
export class PasswordPipe implements PipeTransform {
  transform(name: string, active: boolean = true): any {
    
    /*if (active == true) {
      return name.replace(name, "******");
    } else {
      return name;
    }
    */

    if(active){
      let exit: string = "";
      for( let i=0; i< name.length; i++){
        exit +="*";
      }
      return exit;
    }else{
        return name;
      }
    }

  
  }

