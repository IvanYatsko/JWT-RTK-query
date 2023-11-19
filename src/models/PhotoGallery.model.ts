export enum ORDER_BY {
  LATEST = "latest",
  OLDEST = "oldest",
  POPULAR = "popular",
}

export interface UrlType {
  regular: string;
}

export interface CommentType {
  id: string;
  userId: string;
  text: string;
  createDate: string;
}

export interface DataType {
  id: string;
  ["alt_description"]: string;
  urls: UrlType;
  comments: CommentType[];
}

export interface AddCommentType {
  photoId: string;
  comment: CommentType;
}

export interface DeleteCommentType {
  photoId: string;
  commentId: string;
}