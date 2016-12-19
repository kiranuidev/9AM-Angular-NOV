import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformatter'
})
export class PhoneformatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    var formattedValue="";
    if(args=="IN"){
formattedValue= "+91-"+value;
    }
    else{
      formattedValue="+1 ";
     formattedValue+= value.substring(0,3)+"-"+value.substring(3,6)+"-"+value.substring(6,10);
     
  }
    return formattedValue;
  }

}
