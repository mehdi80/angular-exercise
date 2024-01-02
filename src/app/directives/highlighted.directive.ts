import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input()
  isHighlighted = false;

  @Output()
  toggelHighLighted = new EventEmitter;

  constructor() {
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver($event: any) {
    console.log($event)
    this.isHighlighted = true;
    this.toggelHighLighted.emit(this.isHighlighted)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHighlighted = false;
    this.toggelHighLighted.emit(this.isHighlighted)
  }

}