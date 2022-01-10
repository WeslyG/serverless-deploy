import { Options } from '@mikro-orm/core';
import { entities } from './db.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { IMongoConnect } from './MongoConnect';
import { OnModuleDestroy } from '@nestjs/common';

export class MongoConnectTest implements IMongoConnect, OnModuleDestroy {
  private readonly testPort = 27032;
  private mongod?: MongoMemoryServer;

  async getConfig(): Promise<Options> {
    this.mongod = await MongoMemoryServer.create({
      instance: {
        port: this.testPort,
      },
      binary: {
        version: '4.4.5',
      },
    });

    return {
      entities,
      dbName: 'urfu-provider-test',
      type: 'mongo',
      port: this.testPort,
      debug: true,
      // highlighter: new SqlHighlighter(),
      // logger: logger.log.bind(logger),
    };
  }

  async onModuleDestroy(): Promise<void> {
    await this.mongod?.stop();
  }
}
