import {
  IsString,
  IsNumber,
  IsEmail,
  Min,
  IsDateString,
  IsBoolean,
  IsPhoneNumber,
} from 'class-validator';

export class AddReportDto {
  @IsNumber()
  @Min(1)
  wordID: number;

  @IsString()
  name: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsEmail()
  userEmail: string;

  @IsString()
  report: string;

  @IsBoolean()
  isApproved: boolean;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
