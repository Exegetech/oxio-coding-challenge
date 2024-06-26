import { Album, Photo, Post, Store, User, Comment, Todo } from "../types";
import {
  fetchAlbums,
  fetchComments,
  fetchPhotos,
  fetchPosts,
  fetchTodos,
  fetchUsers,
} from "./fetch";

export function createDefaultStore(): Store {
  return {
    users: {},
    posts: {},
    comments: {},
    photos: {},
    albums: {},
    todos: {},
    userPosts: {},
    postComments: {},
    userAlbums: {},
    albumPhotos: {},
    userTodos: {},
  }
}

export async function fetchDataForStore(): Promise<Store> {
  const [
    usersArr,
    postsArr,
    commentsArr,
    albumsArr,
    photosArr,
    todosArr,
  ] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments(),
    fetchAlbums(),
    fetchPhotos(),
    fetchTodos(),
  ])

  const users = normalizeData<User>(usersArr);
  const posts = normalizeData<Post>(postsArr);
  const comments = normalizeData<Comment>(commentsArr);
  const albums = normalizeData<Album>(albumsArr);
  const photos = normalizeData<Photo>(photosArr);
  const todos = normalizeData<Todo>(todosArr);
  const userPosts = getRelationships(postsArr, 'userId');
  const postComments = getRelationships(commentsArr, 'postId');
  const userAlbums = getRelationships(albumsArr, 'userId');
  const albumPhotos = getRelationships(photosArr, 'albumId');
  const userTodos = getRelationships(todosArr, 'userId');

  return {
    users,
    posts,
    comments,
    albums,
    photos,
    todos,
    userPosts,
    postComments,
    userAlbums,
    albumPhotos,
    userTodos,
  }
}

function normalizeData<T extends { id: string; }>(data: T[]): Record<string, T> {
  return data.reduce((acc, item) => {
    acc[item['id']] = item;
    return acc;
  }, {} as Record<string, T>);
}

function getRelationships<
T extends { id: string },
K extends string,
>(data: T[], foreignKey: K): Record<string, string[]> {
  const dict = {} as Record<string, string[]>;

  data.forEach((datum) => {
    const key = String(datum[foreignKey as keyof T]);
    if (!dict[key]) {
      dict[key] = [];
    }

    dict[key].push(datum.id);
  });

  return dict
}
