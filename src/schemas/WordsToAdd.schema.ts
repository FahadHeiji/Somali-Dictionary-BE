import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'WordsToAdd' })
export class WordsToAdd {
  @Prop({ unique: true, required: true })
  wordID: number;
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  ref: string;

  @Prop({ required: true })
  userEmail: string;

  @Prop({ required: true })
  isApproved: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const WordsToAddSchema = SchemaFactory.createForClass(WordsToAdd);
