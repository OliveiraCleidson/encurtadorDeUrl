import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateShortcutDTO } from './dtos/createShortcut.dto';
import { UpdateShortcutDTO } from './dtos/updateShortcut.dto';
import { ShortcutService } from './shortcut.service';

@Controller('shortcut')
export class ShortcutController {
  constructor(private readonly shortcutService: ShortcutService) {}

  @Post()
  create(@Body() createShortcutDto: CreateShortcutDTO) {
    return this.shortcutService.create(createShortcutDto);
  }

  @Get()
  findAll() {
    return this.shortcutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortcutService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateShortcutDto: UpdateShortcutDTO,
  ) {
    return this.shortcutService.update(+id, updateShortcutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortcutService.remove(+id);
  }
}
