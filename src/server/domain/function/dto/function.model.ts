import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseModel } from '../../../infra/db/BaseModel';

export class FunctionModel extends BaseModel {
  @ApiProperty({
    description: 'name for file function',
    example: 'HelloWorldTestAdapte',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  // TODO: languages array
  @ApiProperty({
    description: 'developer language for current func',
    example: 'python',
  })
  @IsString()
  @IsNotEmpty()
  language: string;

  @ApiProperty({
    description: 'source code function',
    example: 'function hello() { return "hello world"}',
  })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({
    description: 'tags for best search or category your functions',
    example: ['javascript', 'test', 'adapter'],
  })
  @IsOptional()
  @IsArray()
  tags?: string[];
}
