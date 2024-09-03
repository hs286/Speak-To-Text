import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core'

declare var MediaRecorder: any


@Component({
  selector: 'ez-record-button',
  templateUrl: './record-button.component.html',
  styleUrls: ['./record-button.component.css']
})


export class RecordButtonComponent implements OnInit {
  
  @Input() disabled: boolean = false
  @ViewChild('recordButton') recordButton: ElementRef<HTMLButtonElement>
  private mediaRecorder: MediaRecorder
  private audioChunks: any[] = []
  private audioBlob: Blob
  private audioUrl: string
  private audio: HTMLAudioElement
  private isRecording: boolean

  constructor (private renderer: Renderer2) {}

  ngOnInit () {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.mediaRecorder = new MediaRecorder(stream)

      this.mediaRecorder.ondataavailable = event => {
        this.audioChunks.push(event.data)
      }

      this.mediaRecorder.onstop = () => {
        this.audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' })
        this.audioUrl = URL.createObjectURL(this.audioBlob)
        this.audio = new Audio(this.audioUrl)
        this.playAudio()
        this.audioChunks = [] // Reset audioChunks for next recording
      }
    })
  }

  startRecording () {
    if (
      !this.disabled &&
      this.mediaRecorder &&
      this.mediaRecorder.state === 'inactive'
    ) {
      this.isRecording = true
      this.audioChunks = []
      this.mediaRecorder.start()                      
    }
  }

  stopRecording () {
    if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
      this.mediaRecorder.stop()
      this.isRecording = false
    }
  }

  playAudio () {
    if (this.audio) {
      this.audio.play().then(()=>{
      }).catch(e =>{
        console.log('An error occured during playback', e)
      })
    }
  }
}
