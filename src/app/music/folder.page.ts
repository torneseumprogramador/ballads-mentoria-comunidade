import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../services/menu';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public title: string;
  public description: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const slug = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = Menu.titleBySlug(slug);
    this.description = Menu.descriptionBySlug(slug);
  }

}
