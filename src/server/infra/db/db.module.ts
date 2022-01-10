import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProviderEntity } from '../../domain/function/entities/function.entity';
import { MongoConnect } from './MongoConnect';

export const entities = [ProviderEntity];
@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      providers: [MongoConnect],
      inject: [MongoConnect],
      useFactory: async (connection: MongoConnect) =>
        await connection.getConfig(),
    }),
  ],
})
export class DbModule {}
