export class Music{
  constructor() { }

  public id:number;
  public title: string;
  public path_of_music: string;
  public description: string;
  public author: string;
  public tocando: boolean = false;
  public audio = null;
}
