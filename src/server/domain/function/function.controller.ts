import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeployService } from './deploy.service';
import { FunctionCreationDTO } from './dto/function.dto';
import { FunctionService } from './function.service';

@ApiTags('Function')
@Controller('function')
export class FunctionController {
  constructor(
    private readonly fnService: FunctionService,
    private readonly deployService: DeployService,
  ) {}

  @Get()
  getAll() {
    return this.fnService.getAllFn();
  }

  @Get(':id')
  getOne(@Param() id: { id: string }) {
    return this.fnService.getOneFn(id);
  }

  @Post()
  createFn(@Body() body: FunctionCreationDTO): Promise<void> {
    return this.fnService.createFn(body);
  }

  @Put(':id')
  updateFn(@Param() id: { id: string }, @Body() body: any) {
    return this.fnService.updateFn(id, body);
  }

  @Delete(':id')
  deleteFn(@Param() id: { id: string }) {
    return this.fnService.deleteFn(id);
  }

  @Post(':id/deploy/1')
  deploySberCloud(@Param() id: { id: string }) {
    return this.deployService.deployToSberCloud(id);
  }

  @Post(':id/deploy/2')
  deployToYandexCloud(@Param() id: { id: string }) {
    return this.deployService.deployToYandexCloud(id);
  }

  @Post(':id/deploy/3')
  deployToSelectel(@Param() id: { id: string }) {
    return this.deployService.deployToSelectel(id);
  }
}
