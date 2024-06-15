
import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string
  @ViewChild('wave') container!: ElementRef

  // define la instancia de WaveSurfer como ws
  private ws!: WaveSurfer

  isPlaying = signal(false)

  ngAfterViewInit() {
    // en este momento se inicializa usando el hook
    this.ws = WaveSurfer.create({
      url: "assets/audio.mp3",
      container: this.container.nativeElement,
    })
    this.ws.on('play', () => this.isPlaying.set(true))
    this.ws.on('pause', () => this.isPlaying.set(false))
  }

  playPause() {
    // este evento hace uso del método .playPause de ws
    this.ws.playPause()
  }

}
