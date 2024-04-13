import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommentsOnWordService } from './commentsOnWord.service';
import { AddCommentDto } from '../dto/addComment.dto';

@Controller('api/v0')
export class CommentsOnWordController {
  constructor(private commentsOnWordService: CommentsOnWordService) {}

  @Post('/CommentsToAdd')
  @UsePipes(new ValidationPipe())
  addComment(@Body() addComment: AddCommentDto) {
    // return this.commentsToAddService.addComment(addComment);
    console.log(addComment);
  }
}
