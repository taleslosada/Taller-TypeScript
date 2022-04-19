


export class Serie {
  name: string;
  description: string;
  number: number;
  channel: string;
  seasons: number;
  link: string;
  photo: string;
  
  constructor( name:string, description:string, number:number, channel:string ,seasons:number, link:string, photo:string) {
      this.name = name;
      this.description = description;
      this.number = number;
      this.channel = channel;
      this.seasons = seasons;
      this.link = link;
      this.photo = photo;
  }
  
}

