import { Datum, Store, UserId } from "../types";

export function makeDataToDisplay(store: Store): Datum[] {
  const dict: Record<UserId, Datum> = {}

  for (const [userId, user] of Object.entries(store.users)) {
    dict[userId] = {
      user,
      postsCount: 0,
      commentsCount: 0,
      albumsCount: 0,
      photosCount: 0,
      todosCount: 0,
    }
  }

  for (const [userId, postIds] of Object.entries(store.userPosts)) {
    dict[userId].postsCount += postIds.length

    for (const postId of postIds) {
      dict[userId].commentsCount += store.postComments[postId].length
    }
  }

  for (const [userId, albumIds] of Object.entries(store.userAlbums)) {
    dict[userId].albumsCount += albumIds.length

    for (const albumId of albumIds) {
      dict[userId].photosCount += store.albumPhotos[albumId].length
    }
  }

  for (const [userId, todoIds] of Object.entries(store.userTodos)) {
    dict[userId].todosCount += todoIds.length
  }

  return Object.values(dict)
}
