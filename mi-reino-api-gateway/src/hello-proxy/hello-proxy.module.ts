import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HelloProxyController } from './hello-proxy.controller';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3002', // hello-service
      timeout: 5000,
    }),
  ],
  controllers: [HelloProxyController],
})
export class HelloProxyModule {}
