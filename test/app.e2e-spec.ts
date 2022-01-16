import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/server/app.module';
import { MongoConnect } from '../src/server/infra/db/MongoConnect';
import { MongoConnectTest } from '../src/server/infra/db/MongoConnectTest';
import { sample } from 'rxjs';

describe('AppController (e2e)', () => {
  let app: INestApplication;

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

  it('/function Add new func', async () => {
    const func = await request(app.getHttpServer())
      .post('/function')
      .send(Sample1)
      .set('Content-Type', 'application/json')
      .expect(201);
    expect(func.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        ...Sample1,
      }),
    );

    const res = await request(app.getHttpServer()).get('/function').expect(200);
    expect(res.body[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        tags: null,
        ...Sample1,
      }),
    );
  });

  it('/function test bad id', async () => {
    const res = await request(app.getHttpServer()).get('/function/123').expect(400);
    expect(res.body).toEqual(
      expect.objectContaining({
        message: 'Id not valid',
        errorCategory: 'IdNotValid',
        httpStatus: 400,
      }),
    );

    const res2 = await request(app.getHttpServer()).get('/function/61e42436c8fe603118fdfdf9').expect(404);
    expect(res2.body).toEqual(
      expect.objectContaining({
        httpStatus: 404,
        message: 'Id not found',
        errorCategory: 'IdNotFound',
      }),
    );
  });

  it('/function update func', async () => {
    const original = await request(app.getHttpServer())
      .post('/function')
      .send(Sample1)
      .set('Content-Type', 'application/json')
      .expect(201);

    const newFunc = await request(app.getHttpServer())
      .put(`/function/${original.body.id}`)
      .send({
        tags: ['js', 'test'],
      })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(newFunc.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        tags: ['js', 'test'],
        ...Sample1,
      }),
    );

    const newFunc2 = await request(app.getHttpServer())
      .put(`/function/${original.body.id}`)
      .send({
        title: 'zzz',
      })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(newFunc2.body).toEqual(
      expect.objectContaining({
        ...Sample1,
        id: expect.any(String),
        title: 'zzz',
        tags: ['js', 'test'],
      }),
    );
  });

  it('/function delete', async () => {
    const original = await request(app.getHttpServer())
      .post('/function')
      .send(Sample1)
      .set('Content-Type', 'application/json')
      .expect(201);

    const deleted = await request(app.getHttpServer()).delete(`/function/${original.body.id}`);
    expect(deleted.body).toEqual(
      expect.objectContaining({
        ...Sample1,
        id: expect.any(String),
        tags: null,
      }),
    );
  });
});
