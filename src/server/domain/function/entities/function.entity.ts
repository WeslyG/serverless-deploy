import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../infra/db/BaseEntity';

@Entity()
export class FunctionEntity extends BaseEntity {
  @Property()
  body!: string;

  constructor(body: string) {
    super();
    this.body = body;
  }
}
