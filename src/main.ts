import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const grpcOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'server',
      protoPath: join(__dirname, './server.proto'),
    },
  };

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcOptions);

  await app.startAllMicroservices();
  await app.listen(3000);
}

void bootstrap();
