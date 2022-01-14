import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { SelectelClient } from '../../clients/selectel/client';
import { ProviderEntity } from './entities/function.entity';

@Injectable()
export class DeployService {
  constructor(
    @InjectRepository(ProviderEntity)
    private readonly funcRepository: EntityRepository<ProviderEntity>,
  ) {
    this.selectelClient = new SelectelClient();
  }
  selectelClient: SelectelClient;

  async deployToSelectel(id: string): Promise<any> {
    const func = await this.funcRepository.findOne(id);
    // return await this.selectelClient.create(func);
    return true;
  }

  async deployToYandexCloud(id: string): Promise<any> {
    const func = await this.funcRepository.findOne(id);
    return true;
  }

  async deployToSberCloud(id: string): Promise<any> {
    const func = await this.funcRepository.findOne(id);
    return true;
  }
}
