import { Music } from "../models/music";

export class MusicService{
  private static listOfMusic: Music[] = []
  private static key = "list-music"

  public static save(music: Music){
    music.id = new Date().getTime()
    MusicService.listOfMusic = MusicService.all()
    MusicService.listOfMusic.push(music)
    localStorage.setItem(MusicService.key, JSON.stringify(MusicService.listOfMusic))
  }

  public static all(): Music[] {
    let list = localStorage.getItem(MusicService.key)
    return list == null ? [] : JSON.parse(list)
  }
}
