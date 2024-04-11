import { Controller, Get, Query } from '@nestjs/common';
import { WordService } from './words.service';

@Controller()
export class WordController {
  constructor(private wordService: WordService) {}

  @Get('/')
  sayHello() {
    return this.wordService.sayHello();
  }
  @Get('/words')
  getWords() {
    return this.wordService.getWords();
  }
  @Get('/searchWord')
  searchWord(@Query('word') word: string) {
    console.log(word);
    return this.wordService.searchWord(word);
  }
  @Get('/search')
  getWordByID(@Query('word') wordID: string) {
    console.log(wordID);
    return this.wordService.getWordByID(wordID);
  }
}
