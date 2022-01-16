import { Options } from '@mikro-orm/core';
import { entities } from './db.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { IMongoConnect } from './MongoConnect';
import { OnModuleDestroy } from '@nestjs/common';

export class MongoConnectTest implements IMongoConnect, OnModuleDestroy {
  private mongod?: MongoMemoryServer;

  async getConfig(): Promise<Options> {
    this.mongod = await MongoMemoryServer.create({
      binary: {
        version: '4.4.5',
      },
    });

    const connection = this.mongod.getUri();

    return {
      entities,
      dbName: 'urfu-provider-test',
      type: 'mongo',
      clientUrl: connection,
      debug: false,
      // highlighter: new SqlHighlighter(),
      // logger: logger.log.bind(logger),
    };
  }

  async onModuleDestroy(): Promise<void> {
    await this.mongod?.stop();
  }
}
