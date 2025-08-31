// Notification type
export interface Notification {
  id: number;
  title: string;                       
  description: string;                 
  type: 'events' | 'programs' | 'testimonies' | 'general'; 
  date: string;                        
  link: string;                        
  read: boolean;                        
}

// Card type for home/events/gallery
export interface Card {
  title: string;
  image: string;
  link: string;
}

// Home section
export interface HomeData {
  welcome: string;
  backgroundVideo: string;
  cards: Card[];
}

// About section
export interface AboutData {
  text: string;
  pastorMessage: string;
  pastorImage: string;
}

// Contact section
export interface ContactData {
  address: string;
  email: string;
  phone: string;
  website: string;
}

// Rhapsody on Salvation section
export interface RhapsodyData {
  title: string;
  description: string;
  audio: string;
}

// Groups / Departments teaser
export type GroupsTeaser = string;

// Bible verses with images
export interface BibleVerseImage {
  verse: string;
  text: string;
  image: string;
}

// Optional Crossword data
export interface CrosswordData {
  title: string;
  gridSize: number;
  clues: string[];
}

// Complete site data
export interface SiteData {
  home: HomeData;
  notifications: Notification[];
  events: Card[];
  gallery: Card[];
  prayerOfSalvation: string;
  bibleVerses: string[];
  about: AboutData;
  contact: ContactData;
  rhapsody?: RhapsodyData;
  groupsTeaser?: GroupsTeaser;
  bibleVersesWithImages?: BibleVerseImage[];
  crossword?: CrosswordData;
}
