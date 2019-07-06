import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'containsText',
    pure: false
})
export class ContainsTextPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}
