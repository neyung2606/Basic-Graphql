/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { AuthorService } from 'src/author/author.service';
import { Author } from 'src/author/interface/author.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly authorService: AuthorService,
  ) {}

  @Query()
  post(@Args('postID') postID: string) {
    return this.postService.findOneById(postID);
  }

  @Mutation()
  @UseGuards(AuthService)
  async createPost(
    @Args('postInput') post: CreatePostDto,
    @Context('authorID') authorID: string,
  ) {
    console.log(authorID, post)
    const author: Author = await this.authorService.findOneById(authorID);
    console.log(author)
    post.createdBy = author;
    return this.postService.create(post);
  }
}
