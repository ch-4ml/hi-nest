import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // validation decoration 없으면 무시
      forbidNonWhitelisted: true, // validation decoration 없는 key를 사용한 경우 에러
      transform: true, // 유저가 보낸 정보를 실제 타입으로 변경
    }),
  );
  await app.listen(3000);
}
bootstrap();
