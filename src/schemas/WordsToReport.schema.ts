import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'WordsToReport' })
export class WordsToReport {
  @Prop({ unique: true, required: true })
  wordID: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  userEmail: string;

  @Prop({ required: true })
  report: string;

  @Prop({ required: true })
  isApproved: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const WordsToReportSchema = SchemaFactory.createForClass(WordsToReport);
