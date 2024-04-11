import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordModule } from './words/words.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Dictoinary1:2nCpo1KJUVlESMgk@dictionary.w68ucgi.mongodb.net/Dictionary',
    ),
    WordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
