import { Pipe, PipeTransform } from '@angular/core';

import { Exhibitor } from './exhibitor';

@Pipe({
    name: 'exhibitorfilter',
    pure: false
})
export class ExhibitorFilterPipe implements PipeTransform {
  transform(items: Exhibitor[], filter: Exhibitor): Exhibitor[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Exhibitor) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Exhibitor} exhibitor The exhibitor to compare to the filter.
   * @param {Exhibitor} filter The filter to apply.
   * @return {boolean} True if exhibitor satisfies filters, false if not.
   */
  applyFilter(exhibitor: Exhibitor, filter: Exhibitor): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (exhibitor[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (exhibitor[field] !== filter[field]) {
            return false;
          }
        }
        else if (typeof filter[field] === 'object') {
          console.log('zup');
        }
      }
    }
    return true;
  }
}