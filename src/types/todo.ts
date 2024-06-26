import { UserId } from "./user";

export type TodoId = string;

export interface Todo {
  userId: UserId;
  id: TodoId;
  title: string;
  completed: boolean;
}