import { User } from "./user";

export interface Datum {
  user: User;
  postsCount: number;
  commentsCount: number;
  albumsCount: number;
  photosCount: number;
  todosCount: number;
}