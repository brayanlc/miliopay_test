import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [],
  template: `
    <div class="login-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 30px;
        padding: 3rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {}
