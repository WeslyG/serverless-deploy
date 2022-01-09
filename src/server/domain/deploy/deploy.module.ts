import { Module } from '@nestjs/common';
import { DeployService } from './deploy.service';

@Module({
  providers: [DeployService]
})
export class DeployModule {}
