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

}
