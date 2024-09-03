declare class MediaRecorder {
  constructor(stream: MediaStream, options?: MediaRecorderOptions)

  static isTypeSupported(type: string): boolean

  readonly mimeType: string
  readonly state: 'inactive' | 'recording' | 'paused'
  readonly stream: MediaStream
  readonly videoBitsPerSecond: number
  readonly audioBitsPerSecond: number

  ondataavailable: (event: BlobEvent) => void
  onerror: (event: MediaRecorderErrorEvent) => void
  onpause: (event: Event) => void
  onresume: (event: Event) => void
  onstart: (event: Event) => void
  onstop: (event: Event) => void

  start(timeslice?: number): void
  stop(): void
  resume(): void
  pause(): void
  requestData(): void
}

interface MediaRecorderOptions {
  mimeType?: string
  audioBitsPerSecond?: number
  videoBitsPerSecond?: number
  bitsPerSecond?: number
}

interface BlobEvent extends Event {
  readonly data: Blob
  readonly timecode: DOMHighResTimeStamp
}

interface MediaRecorderErrorEvent extends Event {
  readonly error: DOMException
}
