import { Injectable } from '@nestjs/common';
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

  async addComment(addCommentDto: AddCommentDto) {
    try {
      const newComment = await new this.wordsToComment(addCommentDto);
      return newComment.save();
    } catch (err) {
      return new Error(err);
    }
  }
}
