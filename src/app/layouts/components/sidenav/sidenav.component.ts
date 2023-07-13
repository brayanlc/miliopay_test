import { Component } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { AppPaths } from '../../../core/enums/app-paths';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  OverlayModule,
} from '@angular/cdk/overlay';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

export interface Menu {
  label: string;
  path: string;
  icon: string;
  permissions?: string[];
  children?: Menu[];
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    OverlayModule,
    ProfileCardComponent,
  ],
  template: `
    <div class="flex flex-col h-full">
      <img
        ngSrc="/assets/icons/logon.png"
        alt=""
        width="169"
        height="78"
        class="mt-8 ml-4"
      />

      <ul class="flex-1 mt-16">
        <li *ngFor="let item of menu">
          <a
            [routerLink]="item.path"
            class="flex items-center gap-4"
            routerLinkActive="active"
          >
            <img
              ngSrc="assets/icons/{{ item.icon }}.svg"
              width="24"
              height="24"
              alt="menu-icons-{{ item.label }}"
            />
            {{ item.label }}
          </a>
        </li>
      </ul>

      <div
        class="profile flex items-center gap-4 cursor-pointer"
        (click)="isOpen = !isOpen"
        cdkOverlayOrigin
        #trigger="cdkOverlayOrigin"
      >
        <p class="initial-icon">B</p>
        <div class="profile__info">
          <p class="profile__name">Brayan</p>
          <p class="profile__factory">Factory demo</p>
        </div>
      </div>

      <ng-template
        cdkConnectedOverlay
        [cdkConnectedOverlayOrigin]="trigger"
        [cdkConnectedOverlayOpen]="isOpen"
        (overlayOutsideClick)="isOpen = false"
      >
        <app-profile-card></app-profile-card>
      </ng-template>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }

      a {
        margin: 0 1rem;
        padding: 0.6rem 0.6rem 0.6rem 1rem;
        color: #000000;
        font-weight: 700;
        font-size: 20px;

        &:hover,
        &.active {
          background-color: #ece6ff;
        }
      }

      .profile {
        margin: 1rem;
        border-radius: 15px;
        background-color: #f9f9f9;
        padding: 0.5rem 0.5rem 0.5rem 0.7rem;

        &__name {
          color: #171717;
          font-weight: 700;
          font-size: 30px;
          line-height: 1;
        }

        &__factory {
          color: #707070;
          font-weight: 400;
          font-size: 14px;
        }
      }

      .initial-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background-color: #819bff;
        width: 40px;
        min-width: 40px;
        height: 40px;
        min-height: 40px;
        color: #ffffff;
        font-weight: 500;
        font-size: 24px;
      }
    `,
  ],
})
export class SidenavComponent {
  menu = menu;
  isOpen = false;
}

const menu: Menu[] = [
  {
    label: 'Menú 1',
    path: '#',
    icon: 'home',
  },
  {
    label: 'Menú 2',
    path: '#',
    icon: 'indicators',
  },
  {
    label: 'Pagos',
    path: `/${AppPaths.PAYMENTS}`,
    icon: 'sign-off',
  },
  {
    label: 'Menú 3',
    path: '#',
    icon: 'check-list',
  },
  {
    label: 'Bancos',
    path: '#',
    icon: 'bank',
  },
  {
    label: 'Menú 4',
    path: '#',
    icon: 'user',
  },
];
