import { ORDER_BY } from "../models/PhotoGallery";

const AUTHORIZATION_CLIENT_ID =
  "Client-ID RHdxfJjNNKmDgJdBBc1PL6oOoCMaZPVDvoHcbVm-tsg";

export async function getPhotos(
  page: number,
  per_page: number,
  order_by: ORDER_BY = ORDER_BY.LATEST
) {
  const res = await fetch(
    `https://api.unsplash.com/photos?page=${page}&per_page=${per_page}&order_by=${order_by}`,
    {
      headers: {
        Authorization: AUTHORIZATION_CLIENT_ID,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
