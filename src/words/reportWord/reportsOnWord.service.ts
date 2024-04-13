import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WordsToReport } from 'src/schemas/WordsToReport.schema';
import { AddReportDto } from '../dto/addReport.dto';

@Injectable()
export class ReportsOnWordService {
  constructor(
    @InjectModel(WordsToReport.name)
    private reportModel: Model<WordsToReport>,
  ) {}

  async addReport(addReortDto: AddReportDto) {
    try {
      const newReport = await new this.reportModel(addReortDto);
      return newReport.save();
    } catch (err) {
      return new Error(err);
    }
  }
}
