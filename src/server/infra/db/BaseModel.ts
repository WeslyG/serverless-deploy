import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class BaseModel {
  @ApiProperty({
    description: 'uniq resource id',
    example: '61d9c4e2e76d1a31b73d75ea',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Date creation action',
    example: '2022-01-08 17:07:46.654Z',
  })
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty({
    description: 'Date last update',
    example: '2022-01-08 17:07:46.654Z',
  })
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
