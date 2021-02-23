import AppConfig from '@/config/app';
import { Controller, Get, Param, Redirect, Res } from '@nestjs/common';
import { Response } from 'express';
import { FindShortcutByCodeService } from '../../services/findShortcutByCode.service';

@Controller('/')
export class RootController {
  constructor(private findShortcutByCode: FindShortcutByCodeService) {}

  @Get(':code')
  async handleGet(@Param('code') code: string, @Res() res: Response) {
    try {
      const shortcut = await this.findShortcutByCode.execute(String(code));

      return res.status(200).redirect(shortcut.baseLink);
    } catch (err) {
      return res.status(404).send('Página não encontrada!');
    }
  }
}
