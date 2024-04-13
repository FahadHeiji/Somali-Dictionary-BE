import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsOnWordService } from './reportsOnWord.service';
import { ReportsOnWordController } from './reportsOnWord.controller';
import {
  WordsToReport,
  WordsToReportSchema,
} from '../../schemas/WordsToReport.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WordsToReport.name,
        schema: WordsToReportSchema,
      },
    ]),
  ],
  controllers: [ReportsOnWordController],
  providers: [ReportsOnWordService],
})
export class ReportsOnWordModule {}
