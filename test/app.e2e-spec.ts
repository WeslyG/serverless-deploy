import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/server/app.module';
import { MongoConnect } from '../src/server/infra/db/MongoConnect';
import { MongoConnectTest } from '../src/server/infra/db/MongoConnectTest';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let url: string;

  beforeAll(async () => {
    // Удалить все из базы
    mongoServer = await MongoMemoryServer.create();
    url = mongoServer.getUri();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(MongoConnect)
      .useClass(MongoConnectTest)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/provider', () => {
    return request(app.getHttpServer())
      .get('/provider')
      .expect(200)
      .expect([
        {
          id: 1,
          name: 'SberCloud',
        },
        {
          id: 2,
          name: 'YandexCloud',
        },
        {
          id: 3,
          name: 'Selectel',
        },
      ]);
  });

  it('/provider by id', () => {
    return request(app.getHttpServer()).get('/provider/1').expect(200).expect({
      id: 1,
      name: 'SberCloud',
    });
  });

  it('/function Get empty list', () => {
    return request(app.getHttpServer()).get('/function').expect(200).expect([]);
  });

  const Sample1 = {
    title: 'testfunc.js',
    language: 'javascript',
    code: 'function main() {}',
  };

  it('/function Add new func', () => {
    return request(app.getHttpServer())
      .post('/function')
      .send(Sample1)
      .set('Content-Type', 'application/json')
      .expect(201);
  });

  it('/function Get list with one element', async () => {
    const res = await request(app.getHttpServer()).get('/function').expect(200);
    expect(res.body).toEqual(
      expect.objectContaining([
        {
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          tags: null,
          ...Sample1,
        },
      ]),
    );
  });
});
