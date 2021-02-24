import { Controller, Post, Body, Req } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Request } from 'express';

import { ShortnerService } from '../../services/shortner.service';
import { CreateShortcutRequestDTO } from '../dtos/createShortcutRequest.dto';

@Controller('/encurtador')
export class EncurtadorController {
  constructor(private readonly shortcutService: ShortnerService) {}

  @ApiOkResponse({
    schema: {
      properties: {
        newUrl: { type: 'string', example: 'https://wisereducacao.com/' },
      },
    },
  })
  @Post()
  async create(
    @Body() createShortcutDto: CreateShortcutRequestDTO,
    @Req() req: Request,
  ) {
    const userId = req.user?.id;

    const shortcut = await this.shortcutService.execute(
      {
        baseLink: createShortcutDto.url,
      },
      userId,
    );

    return {
      newUrl: `${process.env.APP_URL}/${shortcut.code}`,
    };
  }
}
