import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core'

@Component({
  selector: 'ez-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressButtonComponent {
  constructor (private elRef: ElementRef) {}
  @Input() total: number
  @Input() current: number = 1
  @Input() disabled: boolean = false
  @Input() slides: any
  @Input() isNext: boolean
  @Output() change: EventEmitter<number> = new EventEmitter()

  get elementRef () {
    return this.elRef
  }

  onBack () {
    // this.change.emit(this.current - 1)
  }

  onFirst () {
    // this.change.emit(1)
  }

  onNext () {
    // this.change.emit(this.current + 1)
  }

  onStatusChange () {
    // this.change.emit(2)
  }
}
