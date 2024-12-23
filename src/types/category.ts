import { ReactNode } from 'react';

export interface Category {
  name: string;
  image: string;
  href: string;
  featured?: boolean;
  icon?: ReactNode | string;
}