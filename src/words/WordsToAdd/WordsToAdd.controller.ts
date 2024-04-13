import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WordsToAddService } from './WordsToAdd.service';
import { AddWordDto } from '../dto/addWord.dto';

@Controller('api/v0')
export class WordsToAddController {
  constructor(private wordsToAddService: WordsToAddService) {}

  @Post('/WordToAdd')
  @UsePipes(new ValidationPipe())
  addWord(@Body() addWord: AddWordDto) {
    return this.wordsToAddService.addWord(addWord);
    
  }
}
