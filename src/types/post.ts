import { UserId } from "./user";

export type PostId = string;

export interface Post {
  userId: UserId;
  id: PostId;
  title: string;
  body: string;
}