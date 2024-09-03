import { Component, Input } from '@angular/core'

@Component({
  selector: 'ez-playback-handler',
  templateUrl: './playback-handler.component.html',
  styleUrls: ['./playback-handler.component.css']
})
export class PlaybackHandlerComponent {
  @Input() audioSrc: string
  @Input() text: string
  
  audio: HTMLAudioElement

  ngOnChanges () {
    if (this.audioSrc) {
      this.audio = new Audio(this.audioSrc)
    }
  }

  playAudio () {
    if (this.audio) {
      this.audio.play()
    }
  }
}
