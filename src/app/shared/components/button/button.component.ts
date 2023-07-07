import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        border: 1px #0136fe solid;
        border-radius: 25px;
        background-color: #0136fe;
        padding: 0.5rem 2rem;
        color: #fff;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1;
        width: 250px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
