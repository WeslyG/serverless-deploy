import { PickType } from '@nestjs/swagger';
import { ProviderModel } from './provider.model';

export class ProviderGetDTO extends PickType(ProviderModel, ['id', 'name']) {
  constructor(partial: Partial<ProviderGetDTO>) {
    super();
    this.id = partial.id;
    this.name = partial.name;
  }
}
