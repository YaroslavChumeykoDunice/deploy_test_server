import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { RecordService } from './records.service';
import { RecordController } from './records.controller';
import { Record } from './record.model';

@Module({
  imports: [SequelizeModule.forFeature([Record])],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
