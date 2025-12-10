import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthProxyController } from './auth-proxy.controller';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3001', // auth-service
      timeout: 5000,
    }),
  ],
  controllers: [AuthProxyController],
})
export class AuthProxyModule {}
