import {
  Controller,
  Post,
  Body,
  Req,
  Put,
  Res,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { ShortnerService } from '../../services/shortner.service';
import { UpdateShortcutService } from '../../services/updateShortcut.service';
import { CreateShortcutRequestDTO } from '../dtos/createShortcutRequest.dto';
import { UpdateShortcutRequestDTO } from '../dtos/updateShortcutRequest.dto';

@Controller('/encurtador')
export class EncurtadorController {
  constructor(
    private readonly shortcutService: ShortnerService,
    private readonly updateService: UpdateShortcutService,
  ) {}

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

  @ApiBearerAuth()
  @Put('id/:id')
  async update(
    @Body() data: UpdateShortcutRequestDTO,
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: number,
  ) {
    const userId = req.user?.id;

    if (!userId) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Não autenticado' });
    }

    res.status(200).json(
      await this.updateService.execute({
        id: Number(id),
        userId,
        ...data,
      }),
    );
  }
}
