import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-flag',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="flag inline-flex items-center gap-2">
      <img
        ngSrc="assets/icons/flag-colombia.png"
        height="26"
        width="26"
        alt="Colombia"
      />
      +57
      <img
        ngSrc="assets/icons/arrow-down.svg"
        width="12"
        height="12"
        alt="Arrow down"
      />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .flag {
        cursor: pointer;
        border: 1px solid var(--primary-secondary);
        border-radius: 5px;
        padding: 0 0.5rem;
        height: 44px;
        font-weight: 400;
        font-size: 16px;
        width: 100px;
      }
    `,
  ],
})
export class FlagComponent {}
