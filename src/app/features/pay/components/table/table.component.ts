import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTagComponent } from '../table-tag/table-tag.component';
import { Pay } from '../../pay';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableTagComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() payments: Pay[] | undefined = [];
}
