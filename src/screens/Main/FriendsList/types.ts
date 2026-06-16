import { Mate, Request, Pending } from "features";

export type FriendsPagerKey = "mates" | "requests" | "pending";

export type FriendsPagerItem = Mate | Request | Pending;
