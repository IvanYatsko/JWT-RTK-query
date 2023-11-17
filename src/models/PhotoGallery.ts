export enum ORDER_BY {
  LATEST = "latest",
  OLDEST = "oldest",
  POPULAR = "popular",
}

export interface UrlType {
  regular: string;
}

export interface DataType {
  id: string;
  ["alt_description"]: string;
  urls: UrlType;
}