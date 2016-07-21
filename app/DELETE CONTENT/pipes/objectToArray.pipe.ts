import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'objectToArray'})
export class ObjectToArrayPipe implements PipeTransform {
    transform(dict:Object): any {
        
        var newArray:any[] = [];
        for (var key in dict) {
            
            if (dict.hasOwnProperty(key)) {
                newArray.push({[key] : dict[key]});
            }
        }
        return newArray;

        /*
        let keys:any[] = [];
        for (let key in value ) {
            keys.push({key: key, value: value[key]});
        }
        return keys;
        */
    }
}