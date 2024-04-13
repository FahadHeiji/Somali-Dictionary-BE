import {
  IsString,
  IsNumber,
  IsEmail,
  Min,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class AddCommentDto {
  @IsNumber()
  @Min(1)
  wordID: number;

  @IsString()
  name: string;

  @IsEmail()
  userEmail: string;

  @IsString()
  comment: string;

  @IsBoolean()
  isApproved: boolean;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
