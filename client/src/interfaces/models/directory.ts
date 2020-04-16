export type Directory = {
  sections: Sections[];
};

export type Sections = {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
};
