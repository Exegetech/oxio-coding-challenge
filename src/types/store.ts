import { Post, PostId } from "./post";
import { User, UserId } from "./user";
import { Album, AlbumId } from "./album";
import { Photo, PhotoId } from "./photo";
import { Comment, CommentId } from "./comment";
import { Todo, TodoId } from "./todo";

export type Users = Record<UserId, User>;
export type Posts = Record<PostId, Post>;
export type Comments = Record<CommentId, Comment>;
export type Photos = Record<PhotoId, Photo>;
export type Albums = Record<AlbumId, Album>;
export type Todos = Record<TodoId, Todo>;
export type UserPosts = Record<UserId, PostId[]>;
export type PostComments = Record<PostId, CommentId[]>;
export type UserAlbums = Record<UserId, AlbumId[]>;
export type AlbumPhotos = Record<AlbumId, PhotoId[]>;
export type UserTodos = Record<UserId, TodoId[]>;

export interface Store {
  users: Users;
  posts: Posts;
  comments: Comments;
  photos: Photos;
  albums: Albums;
  todos: Todos;
  userPosts: UserPosts;
  postComments: PostComments;
  userAlbums: UserAlbums;
  albumPhotos: AlbumPhotos;
  userTodos: UserTodos;
}