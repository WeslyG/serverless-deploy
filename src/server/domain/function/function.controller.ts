import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FunctionService } from './function.service';

@Controller('function')
export class FunctionController {
  constructor(private readonly fnService: FunctionService) {}

  @Get()
  getAll() {
    return this.fnService.getAllFn();
  }

  @Get(':id')
  getOne(@Param() id: { id: string }) {
    return this.fnService.getOneFn(id);
  }

  @Post()
  createFn(@Body() body: any) {
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

  @Post(':id/deploy/:providerId')
  deployFn(
    @Param() id: { id: string },
    @Param() providerId: { providerId: string },
  ) {
    return {
      id,
      providerId,
    };
  }
}
