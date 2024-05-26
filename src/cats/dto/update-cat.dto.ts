import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  @IsString()
  @ApiProperty({ description: 'The name of the cat' })
  name: string;

  @IsNumber()
  @ApiProperty({ description: 'The age of the cat' })
  age: number;
}
