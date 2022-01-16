import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { BadRequestErrors } from '../../common/errors/badRequest.errors';
import { FunctionCreateDTO } from './dto/function.create.dto';
import { FunctionGetDTO } from './dto/function.get.dto';
import { FunctionEntity } from './entities/function.entity';

export type FunctionCreation = {
  title: string;
  language: string;
  tags?: string[];
  code: string;
};

@Injectable()
export class FunctionService {
  constructor(
    @InjectRepository(FunctionEntity)
    private readonly funcRepository: EntityRepository<FunctionEntity>,
  ) {}

  async getAllFn(): Promise<FunctionGetDTO[]> {
    const res = await this.funcRepository.findAll();
    return res.map(i => new FunctionGetDTO(i));
  }

  async getOneFn(id: string): Promise<FunctionGetDTO> {
    const res = await this.funcRepository.findOne(id);
    if (!res) throw new BadRequestException(BadRequestErrors.idNotFound());
    return new FunctionGetDTO(res);
  }

  async createFn(body: FunctionCreateDTO): Promise<FunctionGetDTO> {
    const fnEntity = new FunctionEntity(body);
    await this.funcRepository.persistAndFlush(fnEntity);
    return new FunctionCreateDTO(fnEntity);
  }

  // FunctionDTO
  async updateFn(id: string, body: Partial<FunctionCreateDTO>): Promise<FunctionGetDTO> {
    const currentFn = await this.funcRepository.findOne(id);
    if (!currentFn) throw new BadRequestException(BadRequestErrors.idNotFound());

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
    await this.funcRepository.persistAndFlush(currentFn);
    return new FunctionGetDTO(currentFn);
  }

  async deleteFn(id: string): Promise<FunctionGetDTO> {
    const forDelete = await this.funcRepository.findOne(id);
    if (!forDelete) throw new BadRequestException(BadRequestErrors.idNotFound());
    await this.funcRepository.removeAndFlush(forDelete);
    return new FunctionGetDTO(forDelete);
  }
}
