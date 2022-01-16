import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdParse } from '../../common/pipes/mongoid.pipe';
import { DeployService } from './deploy.service';
import { FunctionCreateDTO } from './dto/function.create.dto';
import { FunctionGetDTO } from './dto/function.get.dto';
import { FunctionService } from './function.service';

@ApiTags('Function')
@Controller('function')
export class FunctionController {
  constructor(private readonly fnService: FunctionService, private readonly deployService: DeployService) {}

  @Get()
  getAll(): Promise<FunctionGetDTO[]> {
    return this.fnService.getAllFn();
  }

  @Get(':id')
  getOne(@Param('id', MongoIdParse) id: string): Promise<FunctionGetDTO> {
    return this.fnService.getOneFn(id);
  }

  @Post()
  createFn(@Body() body: FunctionCreateDTO): Promise<FunctionGetDTO> {
    return this.fnService.createFn(body);
  }

  @Put(':id')
  updateFn(@Param('id', MongoIdParse) id: string, @Body() body: any): Promise<FunctionGetDTO> {
    return this.fnService.updateFn(id, body);
  }

  @Delete(':id')
  deleteFn(@Param('id', MongoIdParse) id: string): Promise<FunctionGetDTO> {
    return this.fnService.deleteFn(id);
  }

  @Post(':id/deploy/1')
  deploySberCloud(@Param('id', MongoIdParse) id: string) {
    return this.deployService.deployToSberCloud(id);
  }

  @Post(':id/deploy/2')
  deployToYandexCloud(@Param('id', MongoIdParse) id: string) {
    return this.deployService.deployToYandexCloud(id);
  }

  @Post(':id/deploy/3')
  deployToSelectel(@Param('id', MongoIdParse) id: string) {
    return this.deployService.deployToSelectel(id);
  }
}
