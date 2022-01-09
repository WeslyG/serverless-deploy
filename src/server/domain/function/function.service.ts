import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FunctionEntity } from './entities/function.entity';

@Injectable()
export class FunctionService {
  constructor(
    @InjectRepository(FunctionEntity)
    private readonly funcRepository: EntityRepository<FunctionEntity>,
  ) {}

  async getAllFn() {
    return await this.funcRepository.findAll();
  }

  async getOneFn(id: string) {
    return await this.funcRepository.findOne(id);
  }

  createFn(body: any) {
    const fnEntity = new FunctionEntity(body.body);
    return this.funcRepository.persistAndFlush(fnEntity);
  }

  // FunctionDTO
  async updateFn(id: string, body: any) {
    const currentFn = await this.funcRepository.findOne(id);
    if (!currentFn) throw new HttpException('NotFound', HttpStatus.NOT_FOUND);

    currentFn.body = body.body;
    return this.funcRepository.persistAndFlush(currentFn);
  }

  async deleteFn(id: string) {
    const forDelete = await this.funcRepository.findOne(id);
    if (!forDelete)
      throw new HttpException('Delete id not found', HttpStatus.NOT_FOUND);
    return this.funcRepository.removeAndFlush(forDelete);
  }
}
