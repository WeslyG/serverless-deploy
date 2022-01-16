import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { FunctionEntity } from '../../domain/function/entities/function.entity';
import { MongoConnect } from './MongoConnect';

export const entities = [FunctionEntity];
@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      providers: [MongoConnect],
      inject: [MongoConnect],
      useFactory: (connection: MongoConnect) => connection.getConfig(),
    }),
  ],
})
export class DbModule {}
