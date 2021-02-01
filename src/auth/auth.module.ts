import { Module } from '@nestjs/common';
import { AuthorModule } from 'src/author/author.module';
import { AuthService } from './auth.service';

@Module({
  imports: [AuthorModule],
  providers: [AuthService]
})
export class AuthModule {}
