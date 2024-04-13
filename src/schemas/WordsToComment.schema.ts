import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'WordsToComment' })
export class WordsToComment {
  @Prop({ unique: true, required: true })
  wordID: number;

  @Prop({ required: true })
  name: string;

  

  @Prop({ required: true })
  userEmail: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  isApproved: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const WordsToCommentSchema = SchemaFactory.createForClass(WordsToComment);
