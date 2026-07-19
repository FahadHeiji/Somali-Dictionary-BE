import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordModule } from './words/words.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Dictoinary1:1jArEmoN31qkv45z@dictionary.w68ucgi.mongodb.net/?appName=Dictionary',
    ),
    WordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
