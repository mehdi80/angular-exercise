import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor() {
    console.log('directive created ...')
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return true;
  }

}
