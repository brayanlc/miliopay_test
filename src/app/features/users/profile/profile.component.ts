import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import {
  ButtonFlatComponent,
  ButtonLinkComponent,
  ButtonOutlineComponent,
} from '../../../shared/components/button/button.component';
import { FlagComponent } from '../../../shared/components/flag/flag.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { UploadComponent } from '../components/upload/upload.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    FormsModule,
    ButtonOutlineComponent,
    FlagComponent,
    ButtonLinkComponent,
    ButtonFlatComponent,
    NgOptimizedImage,
    DialogModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private dialog: Dialog = inject(Dialog);

  url: any;
  msg = '';

  clearFile() {
    this.url = null;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(UploadComponent, {
      width: '800px',
      height: '800px',
    });

    dialogRef.closed.subscribe((result) => {
      this.url = result;
    });
  }
}
