import { Options } from '@mikro-orm/core';
import { entities } from './db.module';

export interface IMongoConnect {
  getConfig(): Promise<Options>;
}

export class MongoConnect implements IMongoConnect {
  getConfig(): Promise<Options> {
    return Promise.resolve({
      entities,
      dbName: 'urfu-prj',
      clientUrl: 'mongodb://127.0.0.1:27017',
      type: 'mongo',
      debug: true,
      // highlighter: new SqlHighlighter(),
      // logger: logger.log.bind(logger),
    });
  }
}
