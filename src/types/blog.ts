type Author = {
  image: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};


