import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Record } from './record.model';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class RecordService {
  constructor(
    @InjectModel(Record)
    private readonly recordRepository: typeof Record,
  ) {}

  getRecords(): Promise<Record[]> {
    return this.recordRepository.findAll({ order: [['id', 'ASC']] });
  }

  async checkRecordById(id: number): Promise<number> {
    const record = await this.recordRepository.findByPk(id);
    if (record === null) throw new BadRequestException('no record found');
    return record.id;
  }

  addRecord(record: CreateRecordDto): Promise<Record> {
    return this.recordRepository.create(record);
  }

  async updateRecord(id: number, record: CreateRecordDto) {
    const [, [updateRecord]] = await this.recordRepository.update(record, {
      where: { id },
      returning: true,
    });

    return updateRecord;
  }
}
