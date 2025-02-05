type Author = {
  id: string;
  name: string;
}

export type Items = {
  isFavorite: boolean;
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardCount: number;
}

type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

export type BaseResponse = {
  items: Items[];
  pagination: Pagination;
}
