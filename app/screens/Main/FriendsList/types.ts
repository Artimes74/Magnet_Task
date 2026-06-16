import { Mate, Request, Pending } from 'features/Friends';

export type FriendsPagerKey = 'mates' | 'requests' | 'pending';

export type FriendsPagerItem = Mate | Request | Pending;
