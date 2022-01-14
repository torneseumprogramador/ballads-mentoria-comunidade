import { MenuItem } from './menu_item';

export class Menu{
  static descriptionBySlug(slug: string){
    const item: MenuItem = this.list().find(i => i.slug.toLowerCase() === slug.toLowerCase());
    return item.description;
  }

  static titleBySlug(slug: string){
    const item: MenuItem = this.list().find(i => i.slug.toLowerCase() === slug.toLowerCase());
    return item.title;
  }

  static list(){
    return [
      { title: 'Novo', url: '/musica/Novo', slug: 'novo', description: 'Nova música favorita', icon: 'person-add' },
      { title: 'Lista', url: '/musica/Lista', slug: 'lista', description: 'Lista de músicas favoritas', icon: 'list' },
    ];
  }
}
