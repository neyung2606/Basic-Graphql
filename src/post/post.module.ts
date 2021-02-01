import { Module } from '@nestjs/common';
import { AuthorModule } from 'src/author/author.module';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [AuthorModule],
  providers: [PostService, PostResolver],
})
export class PostModule {}
