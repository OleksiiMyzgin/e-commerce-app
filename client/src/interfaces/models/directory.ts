export type Directory = {
  sections: Sections[];
};

export type Sections = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
};
