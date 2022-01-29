import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music } from '../models/music';
import { Menu } from '../services/menu';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public title: string;
  public description: string;
  public musics = [];
  public isList = true;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const slug = this.activatedRoute.snapshot.paramMap.get('id');
    this.isList = slug.toLowerCase() == "lista";
    this.title = Menu.titleBySlug(slug);
    this.description = Menu.descriptionBySlug(slug);

    const music = new Music();
    music.id = 1;
    music.title = "Quando eu estou aqui";
    music.description = "Musica do Roberto Carlos";
    music.author = "Roberto Carlos";
    music.path_of_music = "...";
    this.musics.push(music);

    const music2 = new Music();
    music2.id = 2;
    music2.title = "Um lugar ao sol";
    music2.description = "Musica de Charlie Brown Jr";
    music2.path_of_music = "...";
    music2.author = "Charlie Brown Jr";
    this.musics.push(music2);

    const music3 = new Music();
    music3.id = 3;
    music3.title = "Vira-vira";
    music3.description = "Musica do Mamonas Assassinas";
    music3.path_of_music = "...";
    music3.author = "Mamonas Assassinas";
    this.musics.push(music3);
  }

}
