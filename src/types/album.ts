import { UserId } from "./user";

export type AlbumId = string;

export interface Album {
  userId: UserId;
  id: AlbumId;
  title: string;
}