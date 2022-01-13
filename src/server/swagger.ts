import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { description, name, version } from '../../package.json';

export const swaggerLoad = (app, globalPrefix) => {
  const options = new DocumentBuilder()
    .setTitle(`${name.charAt(0).toUpperCase() + name.slice(1)} API`)
    .setDescription(description)
    .setContact('Wesly allan', 'https://example.com', 'weslyg22@gmail.com')
    .setVersion(version)
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(`${globalPrefix}/swagger`, app, swaggerDocument);
};
