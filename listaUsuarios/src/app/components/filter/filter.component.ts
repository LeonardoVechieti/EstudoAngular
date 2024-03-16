import { Component } from '@angular/core';
import { IFilterOption } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOption = {
    name: '',
    startDate: undefined, 
    endDate: undefined,
    status: undefined
  };

  statusList = [
    { description: 'Ativo', value: 'true' },
    { description: 'Inativo', value: 'false' }
  ];

  onFilter() {
    console.log('filterOptions', this.filterOptions);
  }
}
