import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppBlockMinusSign]',
  standalone: true,
})
export class AppBlockMinusSignDirective {
  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const initialValue = event.target.value;
    event.target.value = initialValue.replace(/-/g, '');
    if (initialValue !== event.target.value) {
      event.stopPropagation();
    }
  }
}
