import { HttpStatus } from '@nestjs/common';
import { BaseErrorDto } from './base.error.dto';

export class BadRequestErrors {
  static noUniqField(field?: string | undefined) {
    return new BaseErrorDto(
      HttpStatus.BAD_REQUEST,
      field ? `${field} must be unique` : 'Field must be unique',
      'NoUniqueField',
    );
  }

  static notFound(message?: string | undefined) {
    return new BaseErrorDto(HttpStatus.NOT_FOUND, message ?? 'Not found', 'NotFound');
  }

  static idNotValid(id?: string | undefined) {
    return new BaseErrorDto(HttpStatus.BAD_REQUEST, id ? `Id = ${id} not found` : 'Id not valid', 'IdNotValid');
  }

  static idNotFound(id?: string | undefined) {
    return new BaseErrorDto(HttpStatus.NOT_FOUND, id ? `id = ${id} not found` : 'Id not found', 'IdNotFound');
  }

  static idNotValidUuid(value?: string | undefined) {
    return new BaseErrorDto(
      HttpStatus.BAD_REQUEST,
      value ? `${value} is not valid uuidV4` : 'Not valid Uuuid v4',
      'NotValidUuidV4',
    );
  }

  static forbidden(message?: string | undefined) {
    return new BaseErrorDto(HttpStatus.FORBIDDEN, message ?? 'Forbidden', 'Forbidden');
  }

  static unauthorize(message?: string | undefined) {
    return new BaseErrorDto(HttpStatus.UNAUTHORIZED, message ?? 'Unauthorize', 'Unauthorize');
  }

  static badRequest(message?: string | undefined) {
    return new BaseErrorDto(HttpStatus.BAD_REQUEST, message ?? 'BadRequest', 'BadRequest');
  }
}
