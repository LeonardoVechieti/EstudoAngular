import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOption } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOption>();


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
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
