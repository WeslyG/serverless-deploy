import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { FunctionModel } from './function.model';

export class FunctionGetDTO extends IntersectionType(
  PickType(FunctionModel, ['title', 'language', 'code', 'id'] as const),
  PartialType(PickType(FunctionModel, ['tags'] as const)),
) {
  constructor(partial: Partial<FunctionGetDTO> = {}) {
    super();
    this.id = partial.id;
    this.title = partial.title;
    this.language = partial.language;
    this.code = partial.code;
    this.tags = partial.tags;
  }
}
