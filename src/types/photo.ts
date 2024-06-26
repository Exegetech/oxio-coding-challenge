import { AlbumId } from "./album";

export type PhotoId = string;

export interface Photo {
  albumId: AlbumId;
  id: PhotoId;
  title: string;
  url: string;
  thumbnailUrl: string;
}