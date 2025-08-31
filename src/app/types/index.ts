export interface Card {
  title: string;
  image: string;
  link: string;
}

export interface Notification {
  id: number;
  title: string;
  description: string;
  type: string;
  date: string;
  link: string;
  read: boolean;
}

export interface HomeData {
  welcome: string;
  backgroundVideo: string;
  cards: Card[];
}

export interface SiteData {
  home: HomeData;
  notifications: Notification[];
}
