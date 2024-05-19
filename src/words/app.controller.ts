import { Controller, Get } from '@nestjs/common';
import { WordService } from './words.service';

@Controller('/')
export class AppController {
  constructor(private wordService: WordService) {}
  @Get()
  sayHello() {
    return this.wordService.sayHello();
  }
}
