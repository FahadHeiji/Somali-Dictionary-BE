import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'combinedWords' })
export class CombinedWord {
  @Prop({ unique: true, required: true })
  wordID: number;

  @Prop({ required: true })
  ref: string;

  @Prop({ required: true })
  term: string;

  @Prop({ required: false })
  type?: string;

  @Prop({ required: false })
  conjunction?: string;

  @Prop({ required: false })
  info?: string;

  @Prop({ required: false })
  definition?: string;

  @Prop({ required: false })
  definitions?: string[];

  @Prop({ required: false })
  synonyms?: string[];

  @Prop({ required: false })
  example?: string[];

  @Prop({ required: true })
  createdAt: Date;
  @Prop({ required: true })
  updatedAt: Date;
}

export const CombinedWordSchema = SchemaFactory.createForClass(CombinedWord);
