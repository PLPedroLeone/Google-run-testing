import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('auth')
export class AuthProxyController {
  constructor(private readonly http: HttpService) {}

  @Post('login')
  async login(@Body() body: any) {
    const response = await firstValueFrom(this.http.post('/auth/login', body));
    return response.data;
  }

  @Get('me')
  async me(@Headers('authorization') authHeader?: string) {
    const response = await firstValueFrom(
      this.http.get('/auth/me', {
        headers: {
          authorization: authHeader || '',
        },
      }),
    );
    return response.data;
  }
}
