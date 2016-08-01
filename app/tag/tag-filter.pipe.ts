import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {    
    transform(value:any, args:any): any {
        if(args == undefined) { return; }
        let filter = args.toLocaleLowerCase();
        return filter ? value.filter((item:any) => item.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}
