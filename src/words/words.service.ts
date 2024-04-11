import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CombinedWord } from 'src/schemas/Word.schema';

@Injectable()
export class WordService {
  constructor(
    @InjectModel(CombinedWord.name) private wordModel: Model<CombinedWord>,
  ) {}

  sayHello() {
    return 'Hello';
  }
  getWords() {
    return this.wordModel.find({}).limit(10).sort({ wordID: 1 });
  }
  getWordByID(wordID) {
    return this.wordModel.findOne({ wordID });
  }

  searchWord(word: string) {
    if (word.length === 1) {
      word = `${word}-`;
    }
    try {
      const regex = new RegExp(`^${word}`, 'i');
      const result = this.wordModel.find({ term: regex }).sort({ term: 1 });
      return result;
    } catch (error) {
      console.error('Error searching word:', error);
      throw error;
    }
  }
}
