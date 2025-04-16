export interface APIResult {
  count: number;
  next: null;
  previous: string;
  results: Result[];
}

export interface Result {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  imageURL: string;
  newsSite: NewsSite;
  summary: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  launches: any[];
  events: any[];
}

export interface Author {
  name: Name;
  socials: Socials | null;
}

export enum Name {
  JasonRainbow = "Jason Rainbow",
  Nasa = "NASA",
  ZacAubert = "Zac Aubert",
}

export interface Socials {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}

export enum NewsSite {
  Nasa = "NASA",
  SpaceNews = "SpaceNews",
  TheLaunchPad = "The Launch Pad",
}
