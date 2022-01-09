import { Options } from '@mikro-orm/core';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { FunctionEntity } from '../../domain/function/entities/function.entity';

const config = {
  entities: [FunctionEntity],
  dbName: 'urfu-prj',
  type: 'mongo',
  port: 27017,
  // highlighter: new SqlHighlighter(),
  debug: true,
  // logger: logger.log.bind(logger),
} as Options;

@Module({
  imports: [MikroOrmModule.forRoot(config)],
})
export class DbModule {}
