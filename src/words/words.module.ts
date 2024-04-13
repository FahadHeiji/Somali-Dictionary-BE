import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CombinedWord, CombinedWordSchema } from '../schemas/Word.schema';
import { WordService } from './words.service';
import { WordController } from './words.controller';
import { CommentsOnWordModule } from './commentWord/commentsOnWord.module';
import { ReportsOnWordModule } from './reportWord/reportsOnWord.module';
import { WordsToAddModule } from './WordsToAdd/WordsToAdd.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CombinedWord.name,
        schema: CombinedWordSchema,
      },
    ]),
    WordsToAddModule,
    ReportsOnWordModule,
    CommentsOnWordModule,
  ],
  controllers: [WordController],
  providers: [WordService],
})
export class WordModule {}
