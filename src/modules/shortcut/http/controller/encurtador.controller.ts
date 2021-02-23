import { Controller, Post, Body } from '@nestjs/common';

import { ShortnerService } from '../../services/shortner.service';
import { CreateShortcutRequestDTO } from '../dtos/createShortcutRequest.dto';

@Controller('/encurtador')
export class EncurtadorController {
  constructor(private readonly shortcutService: ShortnerService) {}

  @Post()
  async create(@Body() createShortcutDto: CreateShortcutRequestDTO) {
    const shortcut = await this.shortcutService.execute({
      baseLink: createShortcutDto.url,
    });

    return {
      newUrl: `${process.env.APP_URL}/${shortcut.code}`,
    };
  }
}
