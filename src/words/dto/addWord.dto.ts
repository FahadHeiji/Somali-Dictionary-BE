import {
  IsString,
  IsNumber,
  IsEmail,
  Min,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class AddWordDto {
  @IsNumber()
  @Min(1)
  wordID: number;

  @IsString()
  name: string;

  @IsString()
  ref: string;

  @IsEmail()
  userEmail: string;

  @IsBoolean()
  isApproved: boolean;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
