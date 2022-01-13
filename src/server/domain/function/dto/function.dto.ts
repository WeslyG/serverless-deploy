import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FunctionCreationDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsNotEmpty()
  @IsString()
  code: string;
}
