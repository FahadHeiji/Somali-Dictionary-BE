import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WordsToAdd } from '../../schemas/WordsToAdd.schema';
import { AddWordDto } from '../dto/addWord.dto';

@Injectable()
export class WordsToAddService {
  constructor(
    @InjectModel(WordsToAdd.name) private wordsToAdd: Model<WordsToAdd>,
  ) {}

  async addWord(addWordDto: AddWordDto) {
    try {
      const newWord = await new this.wordsToAdd(addWordDto);
      return newWord.save();
    } catch (err) {
      return new Error(err);
    }
  }
}
