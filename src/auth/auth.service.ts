import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthorService } from 'src/author/author.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService implements CanActivate {
  constructor(private readonly authorService: AuthorService) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async canActivate(context: ExecutionContext) {
    const req = await
      context.switchToHttp().getRequest() || await
      GqlExecutionContext.create(context).getContext();
    const token = req && req.headers.authorization;
    if (!token || token.split(' ')[0] !== 'Bearer') {
      throw new HttpException(`Token Fail`, HttpStatus.FORBIDDEN);
    }

    try {
      const decoded = jwt.verify(token.split(' ')[1], 'secret');
      req.authorID = decoded.authorID;
      return this.authorService.checkId(decoded.authorID) ? true : false;
    } catch (err) {
      console.error('log err is :', err);
      throw new HttpException(`Token Fail`, HttpStatus.FORBIDDEN);
    }
  }
}
