import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';

@Controller('')
export class AppController {
  @Get('')
  async getPost(@Res() res) {
    return res.sendFile(join(__dirname, 'build', 'index.html'));
  }
}
