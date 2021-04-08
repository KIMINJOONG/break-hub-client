export type searchTag = {
  seq: number;
  name: string;
  createdAt: string;
};

export type Category = {
  seq: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  boards?: Board[];
};

export type Board = {
  seq: number;
  title: string;
  content: string;
  videoUrl: string;
  category: Category;
  searchTags: Array<searchTag>;
};
