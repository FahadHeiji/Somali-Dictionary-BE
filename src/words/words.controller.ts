import { Controller, Get, Query, Param } from '@nestjs/common';
import { WordService } from './words.service';

@Controller('api/v0')
export class WordController {
  constructor(private wordService: WordService) {}

  @Get('/search/:letter')
  getLetterWords(@Param('letter') f: string) {
    console.log(f);
    return this.wordService.getLetterWords(f.toLocaleLowerCase());
  }
  @Get('/searchWord')
  searchWord(@Query('word') word: string) {
    return this.wordService.searchWord(word);
  }
  @Get('/search')
  getWordByID(@Query('word') wordID: string) {
    return this.wordService.getWordByID(Number(wordID));
  }
}
