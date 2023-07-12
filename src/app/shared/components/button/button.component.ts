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
        width: 250px;
        color: #fff;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}

@Component({
  selector: 'button [flat]',
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
        font-size: 20px;
        line-height: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFlatComponent {}

@Component({
  selector: 'button [outline]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        border: 1px #0136fe solid;
        border-radius: 25px;
        padding: 0.5rem 2rem;
        color: #0136fe;
        font-weight: 500;
        font-size: 20px;
        line-height: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonOutlineComponent {}

@Component({
  selector: 'button [icon]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        gap: 0.3rem;
        border: 1px var(--primary-text) solid;
        border-radius: 25px;
        padding: 0.4rem 1rem;
        color: var(--primary-text);
        font-weight: 400;
        font-size: 18px;
        line-height: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconComponent {}

@Component({
  selector: 'button [link]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        gap: 0.3rem;
        border-radius: 25px;
        padding: 0.4rem 1rem;
        color: var(--primary-text);
        font-weight: 500;
        font-size: 17px;
        line-height: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonLinkComponent {}
