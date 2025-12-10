import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly demoUser = {
    id: 'user-123',
    email: 'demo@mireino.com',
    name: 'Demo User',
  };

  login(dto: LoginDto) {
    const { email, password } = dto;

    // Lógica dummy: solo acepta un usuario/clave fijos
    if (email !== this.demoUser.email || password !== '1234') {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Para la demo devolvemos un "JWT" falso
    const fakeJwt =
      'fake-jwt-token.' +
      Buffer.from(JSON.stringify({ sub: this.demoUser.id, email })).toString(
        'base64',
      );

    return {
      access_token: fakeJwt,
      user: {
        id: this.demoUser.id,
        email: this.demoUser.email,
        name: this.demoUser.name,
      },
    };
  }

  me(fakeToken?: string) {
    // En una implementación real decodificarías y validarías el JWT.
    // Para la demo devolvemos siempre el mismo usuario.
    if (!fakeToken) {
      throw new UnauthorizedException('Token no enviado');
    }

    return {
      id: this.demoUser.id,
      email: this.demoUser.email,
      name: this.demoUser.name,
    };
  }
}
