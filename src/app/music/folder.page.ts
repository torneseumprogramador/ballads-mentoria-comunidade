import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music } from '../models/music';
import { Menu } from '../services/menu';
import { MusicService } from '../services/MusicService';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public title: string;
  public description: string;
  public musics:Music[] = [];
  public isList = true;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const slug = this.activatedRoute.snapshot.paramMap.get('id');
    this.isList = slug.toLowerCase() == "lista";
    this.title = Menu.titleBySlug(slug);
    this.description = Menu.descriptionBySlug(slug);
    this.musics = MusicService.all();
  }

}
