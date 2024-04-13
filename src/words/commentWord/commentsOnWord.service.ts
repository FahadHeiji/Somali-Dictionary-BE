import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WordsToComment } from 'src/schemas/WordsToComment.schema';
import { AddCommentDto } from '../dto/addComment.dto';

@Injectable()
export class CommentsOnWordService {
  constructor(
    @InjectModel(WordsToComment.name)
    private wordsToComment: Model<WordsToComment>,
  ) {}

   addComment(addCommentDto: AddCommentDto) {
    try {
      const newComment =  new this.wordsToComment(addCommentDto);
    } catch {
      throw NotFoundException;
    }
  }
}
