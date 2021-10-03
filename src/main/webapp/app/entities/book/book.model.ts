import { IAuthor } from 'app/entities/author/author.model';

export interface IBook {
  id?: number;
  title?: string;
  price?: number;
  author?: IAuthor;
}

export class Book implements IBook {
  constructor(public id?: number, public title?: string, public price?: number, public author?: IAuthor) {}
}

export function getBookIdentifier(book: IBook): number | undefined {
  return book.id;
}
