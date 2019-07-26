import { Pipe, PipeTransform } from '@angular/core';
import {Address} from '../pages/main/main.component';

@Pipe({
  name: 'formattedAddress'
})
export class FormattedAddressPipe implements PipeTransform {

  transform(address: Address, args?: any): any {
    return address.address.street + ' ' + address.address.zip + ', ' + address.address.country;
  }

}
