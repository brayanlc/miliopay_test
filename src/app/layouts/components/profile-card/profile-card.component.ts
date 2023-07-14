import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import { AppPaths } from '../../../core/enums/app-paths';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <div class="profile-card">
      <div class="flex items-start gap-4">
        <img
          ngSrc="assets/icons/profile.png"
          alt="profile"
          height="51"
          width="51"
        />
        <div class="flex-1">
          <p class="profile-card__name mb-1">Brayan Carbali Lucumi</p>
          <p class="profile-card__id">ID 1234</p>
        </div>
      </div>

      <hr class="my-4 -mx-2" />

      <a [routerLink]="appPaths.PROFILE" class="my-1">Mi cuenta</a>
      <button class="mt-2">Cerrar sesión</button>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }

      .profile-card {
        box-shadow: 0 4px 4px 0 #adadad40;
        border-radius: 10px;
        background-color: #ffffff;
        padding: 1rem;
        width: 100%;

        &__name {
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
        }

        &__id {
          font-weight: 400;
          font-size: 15px;
        }

        a {
          display: block;
          color: #000000;
          font-weight: 500;
          font-size: 16px;
        }

        button {
          display: inline-block;
          border-radius: 5px;
          background-color: #f2fcff;
          padding: 5px 10px;
          color: #000000;
          font-weight: 500;
          font-size: 16px;
        }
      }
    `,
  ],
})
export class ProfileCardComponent {
  protected readonly appPaths = AppPaths;

  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
