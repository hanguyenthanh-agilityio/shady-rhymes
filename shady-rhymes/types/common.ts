export type NavItem = {
  label: string;
};

export type ListItem = {
  label: string;
};

export type Service = {
  title: string;
  text: string;
  avatarName: string;
  avatarSrc: string;
  name: string;
  intro: string;
};

export type Product = {
  id: string;
  src: string;
  altText?: string;
  productName: string;
  helperText: string;
  subText: string;
  rating: number;
};
