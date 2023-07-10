import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppPaths } from '../../../../core/enums/app-paths';

export interface StatusNav {
  label: string;
  value: number;
  active: boolean;
  query: any;
}

@Component({
  selector: 'app-status-nav',
  standalone: true,
  imports: [NgForOf, RouterLink],
  template: `
    <ul>
      <li
        *ngFor="let query of statusNav"
        [class.active]="query.active"
        [routerLink]="['/', appPaths.PAYMENTS]"
        [queryParams]="query.query"
      >
        {{ query.label }}
        <span>{{ query.value }}</span>
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      ul {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin: 0;
        padding: 0;
        color: #171717;
        list-style: none;

        li {
          position: relative;
          cursor: pointer;
          color: #171717;
          font-weight: 500;
          font-size: 22px;

          &::after {
            position: absolute;
            bottom: -3px;
            left: 50%;
            transform: translateX(-50%);
            transition: width 0.3s ease-in-out;
            background-color: #809bff;
            width: 0;
            height: 3px;
            content: '';
          }

          &:hover::after {
            width: 85%;
          }

          &.active {
            &::after {
              width: 85%;
            }

            span {
              transition: background-color 0.4s ease-in-out,
                color 0.3s ease-in-out;
              background-color: #809bff;
              color: #fff;
            }
          }

          span {
            position: absolute;
            top: -5px;
            border: 1px solid #809bff;
            border-radius: 25px;
            padding: 2px 8px;
            color: #809bff;
            font-weight: 700;
            font-size: 14px;
            line-height: 1;
          }
        }
      }
    `,
  ],
})
export class StatusNavComponent implements OnInit {
  public route: ActivatedRoute = inject(ActivatedRoute);

  protected readonly statusNav: StatusNav[] = menu;
  protected readonly appPaths = AppPaths;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.statusNav.forEach((item) => {
        item.active = item.query.status === params.status;
      });
    });
  }
}

const menu: StatusNav[] = [
  {
    label: 'Activos',
    value: 3,
    query: { status: 'active' },
    active: true,
  },
  {
    label: 'Enviados',
    value: 0,
    query: { status: 'sent' },
    active: false,
  },
  {
    label: 'Finalizados',
    value: 0,
    query: { status: 'finished' },
    active: false,
  },
  {
    label: 'Pausados',
    value: 0,
    query: { status: 'paused' },
    active: false,
  },
];
