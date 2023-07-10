import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTagComponent } from "../table-tag/table-tag.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableTagComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  data = [
    {
      payment: 'Payment 1',
      provider: 'Provider 1',
      category: 'Category 1',
      due: new Date(),
      value: 234234,
      responsible: 'Responsible 1',
      status: 'Status 1',
    },
    {
      payment: 'Payment 2',
      provider: 'Provider 2',
      category: 'Category 2',
      due: new Date(),
      value: 39423845,
      responsible: 'Responsible 2',
      status: 'Status 2',
    },
    {
      payment: 'Payment 3',
      provider: 'Provider 3',
      category: 'Category 3',
      due: new Date(),
      value: 2345234,
      responsible: 'Responsible 3',
      status: 'Status 3',
    },
  ];
}
