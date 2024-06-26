import { URL } from '../constant'
import { User, Photo, Album, Post, Comment, Todo } from '../types';

async function simulateSlowNetworkCall(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulateErrorNetworkCall() {
  const random = Math.random()

  if (random < 0.001) {
    throw new Error('Simulated error')
  }
}

async function fetchData<T>(endpoint: string): Promise<T[]> {
  await simulateSlowNetworkCall(1000);
  await simulateErrorNetworkCall();

  const response = await fetch(`${URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export const fetchUsers = () => fetchData<User>('users');
export const fetchPhotos = () => fetchData<Photo>('photos');
export const fetchAlbums = () => fetchData<Album>('albums');
export const fetchPosts = () => fetchData<Post>('posts');
export const fetchComments = () => fetchData<Comment>('comments');
export const fetchTodos = () => fetchData<Todo>('todos');