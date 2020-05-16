import {Category} from './category.enum';

export interface Song {
  id?: string;
  title: string;
  associationName: string;
  associationInfo: string;
  battleCryName: string;
  battleCryInfo: string;
  battleCry: string;
  bgInfo: string;
  category: Category;
  lyrics: string;
  page: number;
  removed: boolean;
}

export interface SongListDto {
  id: string;
  title: string;
  associationName: string;
  battleCryName: string;
  page: number;
  favorite: boolean;
}
