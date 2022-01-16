import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class BaseErrorDto {
  @ApiProperty({
    description: 'Error http status code 400-500',
    example: 400,
    type: 'number',
  })
  statusCode: number;

  @ApiProperty({
    description: 'The reason for the error is in human readable form',
    type: 'string',
    example: 'The name field must contain more than 10 characters',
  })
  message: string;

  @ApiProperty({
    description: 'Type of error to be processed by the machine',
    type: 'string',
    example: 'BadRequest',
  })
  errorCategory: string;

  constructor(statusCode: HttpStatus, message: string, errorCategory: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.errorCategory = errorCategory;

    throw new HttpException(
      {
        message: this.message,
        errorCategory: this.errorCategory,
        httpStatus: this.statusCode,
      },
      this.statusCode,
    );
  }
}
