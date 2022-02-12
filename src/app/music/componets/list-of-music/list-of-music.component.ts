import { Component, Input, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';

@Component({
  selector: 'app-list-of-music',
  templateUrl: './list-of-music.component.html',
  styleUrls: ['./list-of-music.component.scss'],
})
export class ListOfMusicComponent implements OnInit {

  constructor() { }

  @Input()
  musics: Music[];


  ngOnInit() {}

  tocar(music:Music){
    if(music.audio == null) music.audio = new Audio(music.path_of_music)

    if(!music.tocando){
      music.tocando = true
      music.audio.play()
    }
    else{
      music.tocando = false
      music.audio.pause()
    }
  }
}
