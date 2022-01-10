import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../infra/db/BaseEntity';
import { FunctionCreation } from '../function.service';

@Entity()
export class ProviderEntity extends BaseEntity {
  @Property()
  title!: string;

  @Property()
  language!: string;

  @Property()
  tags!: string[];

  @Property()
  code!: string;

  constructor(data: FunctionCreation) {
    super();
    this.title = data.title;
    this.language = data.language;
    this.tags = data.tags;
    this.code = data.code;
  }
}
