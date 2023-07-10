import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [CommonModule, SidenavComponent, RouterOutlet],
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent {}
