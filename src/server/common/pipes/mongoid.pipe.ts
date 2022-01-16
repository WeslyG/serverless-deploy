import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isMongoId } from 'class-validator';
import { BadRequestErrors } from '../errors/badRequest.errors';

@Injectable()
export class MongoIdParse implements PipeTransform<any> {
  transform(id: string): string {
    const validMongoId = isMongoId(id);

    if (!validMongoId) {
      throw new BadRequestException(BadRequestErrors.idNotValid());
    }

    return id;
  }
}
