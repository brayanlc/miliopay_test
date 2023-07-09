import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="page-header">
      <img *ngIf="goBack" src="/assets/icons/arrow-back.svg" alt="" />
      <h2>
        <ng-content></ng-content>
      </h2>
    </div>
  `,
  styles: [
    `
      .page-header {
        display: flex;
        align-items: center;
        gap: 1rem;

        h2 {
          color: #171717;
          font-weight: 700;
          font-size: 35px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input() goBack: boolean = false;
}
