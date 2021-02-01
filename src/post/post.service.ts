/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { Post } from './interface/post.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostService {
    private readonly posts: Post[] = [];

    findOneById(id: string) {
        return this.posts.find((post: Post) => post.id === id)
    }

    create(post: Post) {
        post.id = uuidv4();
        post.createdAt = Date.now();
        this.posts.push(post);
        return post;
    }
}
