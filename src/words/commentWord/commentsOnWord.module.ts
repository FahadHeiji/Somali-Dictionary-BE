import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsOnWordService } from './commentsOnWord.service';
import { CommentsOnWordController } from './commentsOnWord.controller';
import { WordsToComment, WordsToCommentSchema } from '../../schemas/WordsToComment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WordsToComment.name,
        schema: WordsToCommentSchema,
      },
    ]),
  ],
  controllers: [CommentsOnWordController],
  providers: [CommentsOnWordService],
})
export class CommentsOnWordModule {}
