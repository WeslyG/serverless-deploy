import { Controller, Get, Param } from '@nestjs/common';

@Controller('provider')
export class ProviderController {
  @Get()
  getAll() {
    return 'all provider';
  }

  @Get(':id')
  getOne(@Param() id: string) {
    return `get ${id} string`;
  }
}
