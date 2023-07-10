import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="page-header">
      <div class="flex align-center gap-4">
        <img *ngIf="goBack" src="/assets/icons/arrow-back.svg" alt="" />
        <h2>
          <ng-content></ng-content>
        </h2>
      </div>

      <div class="btn-group flex gap-4">
        <ng-content select="btn-group"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .page-header {
        display: flex;
        justify-content: space-between;
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
