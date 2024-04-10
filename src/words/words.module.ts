import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CombinedWord, CombinedWordSchema } from 'src/schemas/Word.schema';
import { WordService } from './words.service';
import { WordController } from './words.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CombinedWord.name,
        schema: CombinedWordSchema,
      },
    ]),
  ],
  controllers: [WordController],
  providers: [WordService],
})
export class WordModule {}
