import { BaseErrorDto } from './base.error.dto';

export class BadRequestErrors {
  static noUniqField(field: string) {
    return new BaseErrorDto(400, `${field} already exist, and must be unique`, 'NoUniqField');
  }

  static notFound(message: string) {
    return new BaseErrorDto(404, message, 'NotFound');
  }

  static idNotValid(id: string) {
    return new BaseErrorDto(400, `Id = ${id} is not valid`, 'IdNotValid');
  }

  static idNotFound(id: string) {
    return new BaseErrorDto(404, `Id = ${id} notFound`, 'IdNotFound');
  }

  static idNotValidUuid(id: string) {
    return new BaseErrorDto(400, `Id = ${id} is not valid uuid v4 string`, 'IdNotValidUuidV4');
  }

  static forbidden(message: string) {
    return new BaseErrorDto(403, message, 'Forbidden');
  }

  static unauthorize(message: string) {
    return new BaseErrorDto(401, message, 'Unauthorize');
  }

  static badRequest(message: string) {
    return new BaseErrorDto(400, message, 'BadRequest');
  }
}
