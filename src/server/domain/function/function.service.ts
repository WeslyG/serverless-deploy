import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProviderEntity } from './entities/function.entity';

export type FunctionCreation = {
  title: string;
  language: string;
  tags?: string[];
  code: string;
};

@Injectable()
export class FunctionService {
  constructor(
    @InjectRepository(ProviderEntity)
    private readonly funcRepository: EntityRepository<ProviderEntity>,
  ) {}

  async getAllFn() {
    return await this.funcRepository.findAll();
  }

  async getOneFn(id: string) {
    return await this.funcRepository.findOne(id);
  }

  createFn(body: FunctionCreation) {
    const fnEntity = new ProviderEntity(body);
    return this.funcRepository.persistAndFlush(fnEntity);
  }

  // FunctionDTO
  async updateFn(id: string, body: Partial<FunctionCreation>) {
    const currentFn = await this.funcRepository.findOne(id);
    if (!currentFn) throw new HttpException('NotFound', HttpStatus.NOT_FOUND);

    if (body.title) {
      currentFn.title = body.title;
    }
    if (body.code) {
      currentFn.code = body.code;
    }
    if (body.tags) {
      currentFn.tags = body.tags;
    }
    if (body.language) {
      currentFn.language = body.language;
    }
    return this.funcRepository.persistAndFlush(currentFn);
  }

  async deleteFn(id: string) {
    const forDelete = await this.funcRepository.findOne(id);
    if (!forDelete)
      throw new HttpException('Delete id not found', HttpStatus.NOT_FOUND);
    return this.funcRepository.removeAndFlush(forDelete);
  }
}
