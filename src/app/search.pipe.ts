import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'contactDisplayNameFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.DisplayName.toLocaleLowerCase().includes(args)) || (val.EmailAddress.toLocaleLowerCase().includes(args))
      ||(val.HomePhone.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}