import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordsToAddService } from './WordsToAdd.service';
import { WordsToAddController } from './WordsToAdd.controller';
import { WordsToAdd, WordsToAddSchema } from '../../schemas/WordsToAdd.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WordsToAdd.name,
        schema: WordsToAddSchema,
      },
    ]),
  ],
  controllers: [WordsToAddController],
  providers: [WordsToAddService],
})
export class WordsToAddModule {}
