export type CommentId = string;

export interface Comment {
  postId: number;
  id: CommentId;
  name: string;
  email: string;
  body: string;
}