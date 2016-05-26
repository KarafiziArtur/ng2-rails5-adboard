import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[isLast]',
  template: ``,
})
export class LastAdvertDirective{
  @Input() isLast: boolean;
  @Output() lastDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() {
    if(this.isLast) {
      this.lastDone.emit(true);
    }
  }
}
