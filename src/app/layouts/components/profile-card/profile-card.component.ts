import { Component } from '@angular/core';
import { AppPaths } from '../../../core/enums/app-paths';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <div class="profile-card">
      <div class="flex gap-4">
        <img src="assets/icons/profile.png" alt="" />
        <div>
          <p class="profile-card__name">Brayan Carbali</p>
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
      }

      .profile-card {
        box-shadow: 0px 4px 4px 0px #adadad40;
        border-radius: 10px;
        padding: 1rem;

        &__name {
          font-weight: 700;
          font-size: 18px;
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
}
