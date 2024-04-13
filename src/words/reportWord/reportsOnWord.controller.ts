import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ReportsOnWordService } from './reportsOnWord.service';
import { AddReportDto } from '../dto/addReport.dto';

@Controller('api/v0')
export class ReportsOnWordController {
  constructor(private reportsOnWordService: ReportsOnWordService) {}

  @Post('/ReportToAdd')
  @UsePipes(new ValidationPipe())
  addReport(@Body() addReportDto: AddReportDto) {
    // return this.reportsOnWordService.addReport(addReportDto);
    console.log(addReportDto);
  }
}
