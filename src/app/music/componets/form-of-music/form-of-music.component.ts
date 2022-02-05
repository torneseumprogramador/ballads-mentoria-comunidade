import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/MusicService';

@Component({
  selector: 'app-form-of-music',
  templateUrl: './form-of-music.component.html',
  styleUrls: ['./form-of-music.component.scss'],
})
export class FormOfMusicComponent implements OnInit {

  constructor() { }

  public music:Music = new Music()

  public salvar(){
    if(!this.music.title || this.music.title == ""){
      alert("O titulo é obrigatório")
      return
    }

    MusicService.save(this.music)

    alert("Dados cadastrados com sucesso !")
    this.music = new Music()
  }

  ngOnInit() {}

}
