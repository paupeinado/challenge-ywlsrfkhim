import { Pipe, PipeTransform } from '@angular/core';
import { Post } from "../../services/post/post";

@Pipe({
  name: 'containsText'
})
export class ContainsTextPipe implements PipeTransform {

  transform(items: Post[], filter: string): any {
    if (items.length === 0 || !filter) {
      return items;
    }
    return items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
