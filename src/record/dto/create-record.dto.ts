import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecordDto {
  @IsString({ message: 'Interior must be a valid string' })
  @IsNotEmpty({ message: 'Text should not be empty' })
  text: string;
}
