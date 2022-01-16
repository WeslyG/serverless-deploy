import { PartialType, PickType } from '@nestjs/swagger';
import { FunctionModel } from './function.model';

export class FunctionUpdateDTO extends PartialType(
  PickType(FunctionModel, ['title', 'language', 'code', 'id', 'tags'] as const),
) {
  constructor(partial: Partial<FunctionUpdateDTO> = {}) {
    super();
    this.id = partial.id;
    this.title = partial.title;
    this.language = partial.language;
    this.code = partial.code;
    this.tags = partial.tags;
  }
}
