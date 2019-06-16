import {Category} from './category.enum';

export interface Song {
  id?: string;
  title: string;
  associationInfo: string;
  associationName: string;
  battleCry: string;
  battleCryInfo: string;
  battleCryName: string;
  bgInfo: string;
  category: Category;
  lyrics: string;
  page: number;
  removed: boolean;
}
