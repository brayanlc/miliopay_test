import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppBlockMinusSignDirective } from '../../../../shared/directives/app-block-minus-sign.directive';

@Component({
  selector: 'app-input-otp',
  standalone: true,
  template: `
    <ng-container>
      <input
        #pin
        [id]="'input-1' + id"
        type="number"
        pattern="^[0-9]+$"
        inputmode="numeric"
        maxlength="1"
        autocomplete="one-time-code"
        appAppBlockMinusSign
      />
      <input
        #pin
        [id]="'input-2' + id"
        type="number"
        pattern="^[0-9]+$"
        inputmode="numeric"
        maxlength="1"
        appAppBlockMinusSign
      />
      <input
        #pin
        [id]="'input-3' + id"
        type="number"
        pattern="^[0-9]+$"
        inputmode="numeric"
        maxlength="1"
        appAppBlockMinusSign
      />
      <input
        #pin
        [id]="'input-4' + id"
        type="number"
        pattern="^[0-9]+$"
        inputmode="numeric"
        maxlength="1"
        appAppBlockMinusSign
      />
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        box-sizing: border-box;
        width: 100%;
      }

      :host * {
        box-sizing: border-box;
      }

      input {
        box-sizing: border-box;
        margin-bottom: 1px;
        outline: none;
        border: 1.5px solid #000;
        border-radius: 5px;
        width: 71px;
        height: 71px;
        color: #000;
        font-weight: 700;
        font-size: 34px;
        line-height: 29px;
        text-align: center;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      input[type='number'] {
        -moz-appearance: textfield;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputOtpComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppBlockMinusSignDirective],
})
export class InputOtpComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @ViewChildren('pin') queryList!: QueryList<ElementRef>;
  id = Math.floor(Math.random() * 100);
  value: string = '';
  isDisabled: boolean = false;
  onChange = (_: any) => {};
  onTouch = () => {};
  ngOnInit() {}

  get lists() {
    return this.queryList.toArray();
  }

  ngAfterViewInit() {
    this.lists.forEach(({ nativeElement: input }, key) => {
      input.addEventListener('keydown', (event: any) =>
        this.keydown(event, input, key),
      );
      input.addEventListener('keyup', (event: any) =>
        this.keyup(event, input, key),
      );
      input.addEventListener('click', () => {
        this.getInputEmpty();
      });
    });
  }

  keyup(event: KeyboardEvent, input: any, key: number) {
    this.value = this.data;
    this.onTouch();
    this.onChange(this.value);
    if (event.key !== 'Backspace' && event.key !== 'Delete') return;
    this.lists[key].nativeElement.value = '';
    if (input.value || key === 0) return;
    this.lists[key - 1].nativeElement.focus();
  }

  keydown(event: KeyboardEvent, input: any, key: number) {
    if (event.key === 'Dead') {
      input.blur();
      setTimeout(() => input.focus());
    }
    if (event.code === 'KeyV' && event.metaKey) {
      return;
    }
    if (!/^\d+$/.test(event.key)) {
      if (event.key !== 'Backspace') {
        event.preventDefault();
      }
      return;
    }
    if (input.value) {
      event.preventDefault();
      if (key <= 2) {
        this.lists[key + 1].nativeElement.value = event.key;
        this.lists[key + 1].nativeElement.focus();
      }
    }
  }

  getInputEmpty() {
    const input = this.lists.find((value) => !value.nativeElement.value);
    if (input) {
      return input.nativeElement.focus();
    }
    this.lists[3].nativeElement.focus();
  }

  get data() {
    return this.lists.map((value) => value.nativeElement.value).join('');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }
}
