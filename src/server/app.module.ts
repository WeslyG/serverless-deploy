import { Module } from '@nestjs/common';
import { FunctionModule } from './domain/function/function.module';
import { DbModule } from './infra/db/db.module';

@Module({
  imports: [FunctionModule, DbModule],
})
export class AppModule {}
