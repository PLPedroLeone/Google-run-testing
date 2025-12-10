import { Controller, Get, Headers } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('hello')
export class HelloProxyController {
  constructor(private readonly http: HttpService) {}

  @Get('public')
  async getPublic() {
    const response = await firstValueFrom(this.http.get('/hello/public'));
    return response.data;
  }

  @Get('secure')
  async getSecure(@Headers('authorization') authHeader?: string) {
    const response = await firstValueFrom(
      this.http.get('/hello/secure', {
        headers: { authorization: authHeader || '' },
      }),
    );
    return response.data;
  }
}
