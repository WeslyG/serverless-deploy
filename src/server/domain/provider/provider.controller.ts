import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';

@Controller('provider')
export class ProviderController {
  private providers = [
    {
      id: 1,
      name: 'SberCloud',
    },
    {
      id: 2,
      name: 'YandexCloud',
    },
    {
      id: 3,
      name: 'Selectel',
    },
  ];

  @Get()
  getAll() {
    return this.providers;
  }

  @Get(':id')
  getOne(@Param() id: any) {
    const res = this.providers.filter((x) => x.id === parseInt(id.id));
    if (res.length > 0) {
      return res[0];
    } else {
      throw new HttpException('Provider id not found', HttpStatus.NOT_FOUND);
    }
  }
}
