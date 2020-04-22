import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(description: string, length: number = 30  ): string {

    let descriptionReturn:string;

    if(description.length <= 30 ){
      descriptionReturn = description;
    }
    else{
      descriptionReturn = description.substring(0,length)+'...';
    }
    return descriptionReturn;
  }

}
