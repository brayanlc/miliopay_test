import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import {
  ButtonFlatComponent,
  ButtonLinkComponent,
  ButtonOutlineComponent,
} from '../../../shared/components/button/button.component';
import { FlagComponent } from '../../../shared/components/flag/flag.component';

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
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  url: any;
  msg = '';

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }

  clearFile() {
    this.url = null;
  }
}
