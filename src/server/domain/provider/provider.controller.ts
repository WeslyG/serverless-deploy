import { BadRequestException, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BadRequestErrors } from '../../common/errors/badRequest.errors';
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
  getOne(@Param('id', ParseIntPipe) id: number): ProviderGetDTO {
    const res = this.providers.filter(x => x.id === id);
    if (res.length > 0) {
      if (res[0]) return res[0];
      throw new BadRequestException(BadRequestErrors.idNotValid(id.toString()));
    } else {
      throw new HttpException('Provider id not found', HttpStatus.NOT_FOUND);
    }
  }
}
