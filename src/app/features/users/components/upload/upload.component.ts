import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { ButtonLinkComponent, ButtonOutlineComponent, } from '../../../../shared/components/button/button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonLinkComponent,
    NgIf,
    ButtonOutlineComponent,
    ReactiveFormsModule,
  ],
  template: `
    <div
      class="w-full h-full flex items-center justify-center flex-col relative"
    >
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
        <input
          type="file"
          id="file"
          [formControl]="fileForm"
          accept="image/png, image/jpeg"
        />
      </label>

      <div class="flex gap-4 mt-12">
        <button class="flex-none btn-icon">
          <img
            src="assets/icons/rotate.svg"
            alt="rotate"
            height="24"
            width="24"
          />
        </button>
        <button class="flex-none btn-icon">
          <img ngSrc="assets/icons/cut.svg" alt="cut" height="24" width="24" />
        </button>
        <button link (click)="setInitialImage()">Restablecer</button>
      </div>

      <div class="btn-group">
        <button outline (click)="close()">Guardar</button>
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

      button[outline] {
        border: 1px solid #ffffff;
        padding: 0.7rem 2.5rem;
        font-weight: 500;
        font-size: 20px;
      }

      button {
        color: #ffffff;
      }

      .btn-icon {
        width: 24px !important;
        height: 24px !important;

        img {
          display: block;
          width: 24px;
          height: 24px;
        }
      }

      .btn-group {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
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
export class UploadComponent implements OnInit {
  public dialogRef: DialogRef<File> = inject(DialogRef);
  public url = '';
  private file: File | undefined = undefined;
  public fileForm = new FormControl();

  ngOnInit() {
    this.setInitialImage();
  }

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
    if (!this.file) {
      return;
    }
    this.dialogRef.close(this.file);
  }

  setInitialImage() {
    this.url = './assets/no-profile-picture-icon.png';
    this.file = undefined;
    this.fileForm.reset();
  }
}
