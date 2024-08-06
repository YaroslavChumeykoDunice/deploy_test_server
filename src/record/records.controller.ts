import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { RecordService } from './records.service';
import { Record } from './record.model';
import { CreateRecordDto } from './dto/create-record.dto';

@Controller('records')
export class RecordController {
  constructor(private readonly authService: RecordService) {}

  @Get()
  getRecords(): Promise<Record[]> {
    return this.authService.getRecords();
  }

  @Get(':id')
  checkRecordById(@Param('id') id: number): Promise<number> {
    return this.authService.checkRecordById(id);
  }

  @Post()
  addRecord(@Body() createRecordDto: CreateRecordDto): Promise<Record> {
    return this.authService.addRecord(createRecordDto);
  }

  @Put(':id')
  updateRecord(
    @Body() updateRecordDto: CreateRecordDto,
    @Param('id') id: number,
  ) {
    return this.authService.updateRecord(id, updateRecordDto);
  }
}
