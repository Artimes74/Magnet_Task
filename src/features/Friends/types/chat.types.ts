export interface Story {
  id: number;
  name: string;
  avatar: string;
}

export interface Mate {
  id: number;
  name: string;
  avatar: string;
  isFavorite: boolean;
  isOnline: boolean;
  isVip: boolean;
  section: "Mates" | "Request" | "Pending";
}

export interface Request {
  id: number;
  name: string;
  avatar: string;
  timeOfRequested: string;
  isFavorite: boolean;
  isVip: boolean;
  section: "Mates" | "Request" | "Pending";
}

export interface Pending {
  id: number;
  name: string;
  avatar: string;
  timeOfRequested: string;
  isVip: boolean;
  isFavorite: boolean;
  section: "Mates" | "Request" | "Pending";
}

export interface FriendsResponse {
  stories: Story[];
  mates: Mate[];
  requests: Request[];
  pending: Pending[];
}

export interface RequestActionPayload {
  requestId: number;
}
