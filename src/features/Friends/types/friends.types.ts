export interface Story {
  id: number;
  name: string;
  avatar: string;
}

export enum Section {
  Mates = "Mates",
  Request = "Request",
  Pending = "Pending",
}

export interface Mate {
  id: number;
  name: string;
  avatar: string;
  isFavorite: boolean;
  isOnline: boolean;
  isVip: boolean;
  section: Section.Mates;
}

export interface Request {
  id: number;
  name: string;
  avatar: string;
  timeOfRequested: string;
  isFavorite: boolean;
  isVip: boolean;
  section: Section.Request;
}

export interface Pending {
  id: number;
  name: string;
  avatar: string;
  timeOfRequested: string;
  isVip: boolean;
  isFavorite: boolean;
  section: Section.Pending;
}

export interface FriendsResponse {
  stories: Story[];
  mates: Mate[];
  requests: Request[];
  pending: Pending[];
}
