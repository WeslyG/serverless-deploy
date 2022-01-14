import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProviderGetDTO } from './dto/provider.get.dto';

@ApiTags('Provider')
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
  getAll(): ProviderGetDTO[] {
    return this.providers;
  }

  @Get(':id')
  getOne(@Param('id') id: string): ProviderGetDTO {
    const res = this.providers.filter(x => x.id === parseInt(id));
    if (res.length > 0) {
      return res[0];
    } else {
      throw new HttpException('Provider id not found', HttpStatus.NOT_FOUND);
    }
  }
}
