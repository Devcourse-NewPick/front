export interface INewsDetail {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  userId: number;
  createdAt: string;
  viewcount: number;
}

export interface IMySummary {
  id: number;
  categoryName: string;
  userId: number;
  createdAt: string;
  img: string;
  like: number;
  title: string;
  summary: string;
}