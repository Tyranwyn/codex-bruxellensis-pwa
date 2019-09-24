import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(text: string, args?: any): any {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

}
