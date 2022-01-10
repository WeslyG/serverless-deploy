import { Options } from '@mikro-orm/core';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProviderEntity } from '../../domain/function/entities/function.entity';

const config = {
  entities: [ProviderEntity],
  dbName: 'urfu-prj',
  type: 'mongo',
  port: 27017,
  debug: true,
  // highlighter: new SqlHighlighter(),
  // logger: logger.log.bind(logger),
} as Options;

@Module({
  imports: [MikroOrmModule.forRoot(config)],
})
export class DbModule {}
