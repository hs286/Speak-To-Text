import { Component, Input } from '@angular/core'

@Component({
  selector: 'ez-image-handler',
  templateUrl: './image-handler.component.html',
  styleUrls: ['./image-handler.component.css']
})
export class ImageHandlerComponent {
  @Input() imageSrc: string
}
