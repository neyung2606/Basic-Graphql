/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { Author } from './interface/author.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthorService {
  private readonly authors: Author[] = [
    {
      firstName: 'a',
      lastName: 'a',
      dob: 2222,
      id: '9fa234f3-8af9-4563-9658-006329c0b8f6',
    },
  ];

  findOneById(id: string) {
    return this.authors.find((person: Author) => person.id === id);
  }

  create(author: Author) {
    const idAuthor = uuidv4();
    author.id = idAuthor;
    this.authors.push(author);
    return author;
  }

  checkId(id: string) {
    return this.authors.findIndex(e => e.id === id) === -1 ? false : true;
  }
}
