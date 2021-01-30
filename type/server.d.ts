export type searchRequirement = {
  seq: number;
  name: string;
  code: string;
  createdAt: string;
};

export type Board = {
  seq: number;
  title: string;
  content: string;
  videoLink: string;
  category: number;
  search: Array<string>;
};
