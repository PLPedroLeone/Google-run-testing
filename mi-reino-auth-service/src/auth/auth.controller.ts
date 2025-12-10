import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('me')
  me(@Headers('authorization') authHeader?: string) {
    // Esperamos algo tipo "Bearer <token>"
    const token = authHeader?.split(' ')[1];
    return this.authService.me(token);
  }
}
