import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthProxyModule } from './auth-proxy/auth-proxy.module';
import { HelloProxyModule } from './hello-proxy/hello-proxy.module';

@Module({
  imports: [AuthProxyModule, HelloProxyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
