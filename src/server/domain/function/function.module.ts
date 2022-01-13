import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { DbModule } from '../../infra/db/db.module';
import { DeployService } from './deploy.service';
import { ProviderEntity } from './entities/function.entity';
import { FunctionController } from './function.controller';
import { FunctionService } from './function.service';

@Module({
  imports: [
    DbModule,
    MikroOrmModule.forFeature({
      entities: [ProviderEntity],
    }),
  ],
  controllers: [FunctionController],
  providers: [FunctionService, DeployService],
})
export class FunctionModule {}
