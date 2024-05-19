import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CombinedWord } from '../schemas/Word.schema';
const alphabet: any[] = [
  'A',
  'B',
  'C',
  'D',
  'DH',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'KH',
  'L',
  'M',
  'N',
  'O',
  'Q',
  'R',
  'S',
  'SH',
  'T',
  'U',
  'W',
  'X',
  'Y',
];
@Injectable()
export class WordService {
  constructor(
    @InjectModel(CombinedWord.name) private wordModel: Model<CombinedWord>,
  ) {}

  sayHello() {
    return 'Hello';
  }
  getWords() {
    try {
      return this.wordModel.find({}).limit(10).sort({ wordID: 1 });
    } catch {
      throw NotFoundException;
    }
  }
  async getLetterWords(letter: string) {
    try {
      const regex = new RegExp(`^${letter}`, 'i');
      const result = await this.wordModel.find({ term: regex });
      const res = result.map((word) => {
        return {
          wordID: word.wordID,
          ref: word.ref,
          term: word.term,
          type: word.type,
          conjunction: word.conjunction,
          info: word.info,
          definition: word.definition,
          definitions: word.definitions,
          synonyms: word.synonyms,
          example: word.example,
        };
      });
      return res;
    } catch {
      throw NotFoundException;
    }
  }
  getWordByID(wordID: number) {
    try {
      return this.wordModel.findOne({ wordID });
    } catch {
      throw NotFoundException;
    }
  }

  searchWord(word: string) {
    if (word.length === 1) {
      word = `${word}-`;
    }
    try {
      const regex = new RegExp(`^${word}`, 'i');
      const result = this.wordModel.find({ term: regex }).sort({ term: 1 });
      return result;
    } catch {
      throw NotFoundException;
    }
  }
}
