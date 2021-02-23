import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { FindShortcutByCodeService } from '../../services/findShortcutByCode.service';

@Controller('/')
export class RootController {
  constructor(private findShortcutByCode: FindShortcutByCodeService) {}

  @ApiOkResponse({
    description: 'Redirect to a URL that match with the given code',
  })
  @ApiNotFoundResponse({
    description: 'Returns 404 if no url is found that matches the given code',
  })
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
