import { Component, inject } from '@angular/core';
import { CommonModule, NgIf, NgOptimizedImage } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { ButtonLinkComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [NgOptimizedImage, ButtonLinkComponent, NgIf],
  template: `
    <div class="w-full h-full flex items-center justify-center flex-col">
      <label
        class="flex items-center justify-center relative"
        for="file"
        (change)="selectFile($event)"
      >
        <div class="img-container">
          <img [src]="url" alt="profile" class="img-overlay" />
        </div>

        <div class="img-container img-container-principal">
          <img [src]="url" alt="profile" class="img-principal" />
        </div>
        <input type="file" id="file" accept="image/png, image/jpeg" />
      </label>

      <div>
        <button link>Restablecer</button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        border-radius: 30px;
        background: #242424;
        padding: 4rem;
        height: 100%;
      }

      button {
        color: #ffffff;
      }
      label {
        width: 400px;
        height: 400px;

        .img-container {
          position: absolute;
          opacity: 0.2;
          width: 400px;
          height: 400px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          &-principal {
            opacity: 1;
            z-index: 1;
            border: 3px solid #ffffff;
            border-radius: 50%;
            overflow: hidden;
          }
        }
      }
    `,
  ],
})
export class UploadComponent {
  public dialogRef: DialogRef<File> = inject(DialogRef);
  public url = './assets/no-profile-picture-icon.png';
  private file: File | undefined = undefined;

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    this.file = event.target.files[0];
    reader.onload = (_event) => {
      this.url = reader.result as string;
    };
  }

  public close() {
    this.dialogRef.close(this.file);
  }
}
