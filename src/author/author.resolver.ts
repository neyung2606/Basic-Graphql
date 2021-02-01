/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Resolver()
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query()
  author(@Args('authorID') authorID: string) {
    return this.authorService.findOneById(authorID);
  }

  @Mutation()
  createAuthor(@Args('author') author: CreateAuthorDto) {
    return this.authorService.create(author);
  }
}