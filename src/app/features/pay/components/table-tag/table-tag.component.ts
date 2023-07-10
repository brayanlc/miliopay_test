import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-tag',
  standalone: true,
  imports: [],
  template: `
    <span>
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      :host {
        cursor: default;
      }
      span {
        background-color: #e7f9ff;
        padding: 0.3rem 1rem;
        color: #0136fe;
        font-weight: 500;
        font-size: 15px;
        border-radius: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTagComponent {}
