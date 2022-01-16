import { Module } from '@nestjs/common';
import { FunctionModule } from './domain/function/function.module';
import { ProviderModule } from './domain/provider/provider.module';
import { DbModule } from './infra/db/db.module';

@Module({
  imports: [DbModule, FunctionModule, ProviderModule],
})
export class AppModule {}
