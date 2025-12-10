import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get('public')
  getPublic() {
    return { message: 'Hello from hello-service (public)' };
  }

  @Get('secure')
  getSecure(@Headers('authorization') authHeader?: string) {
    const token = authHeader?.split(' ')[1];

    // Lógica dummy: solo aceptamos tokens que empiecen con "fake-jwt-token."
    if (!token || !token.startsWith('fake-jwt-token.')) {
      throw new UnauthorizedException('Token inválido o no enviado');
    }

    return {
      message: 'Hello from hello-service (secure)',
      token,
    };
  }
}
