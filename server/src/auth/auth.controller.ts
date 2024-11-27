import {
  Controller,
  Post,
  Req,
  Body,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async ignup(
    @Body() body: { email: string; username: string; password: string },
  ) {
    return this.authService.signup(body.email, body.username, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return this.authService.login(user);
  }

  //TODO : logout implementation

  // @UseGuards(JwtAuthGuard)
  // @Post('logout')
  // async logout(@Request() req) {
  //   req.logout();
  //   return { message: 'Logged out' };
  // }
}
