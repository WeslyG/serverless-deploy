import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProviderModel {
  @ApiProperty({
    description: 'cloud provider uniq id',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'cloud provider name',
    example: 'SberCloud',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
