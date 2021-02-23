import { Module } from '@nestjs/common';
import { EncurtadorController } from './http/controller/encurtador.controller';
import { RootController } from './http/controller/root.controller';
import urlValidatorProvider from './providers/urlValidator';
import shortcutRepositoryProvider from './repositories';
import { FindShortcutByCodeService } from './services/findShortcutByCode.service';
import { FindShortcutByIdService } from './services/findShortcutById.service';
import { ShortcutGeneratorService } from './services/shortcutGenerator.service';
import { ShortnerService } from './services/shortner.service';
import { UpdateShortcutService } from './services/updateShortcut.service';

@Module({
  controllers: [EncurtadorController, RootController],
  providers: [
    shortcutRepositoryProvider,
    urlValidatorProvider,
    ShortnerService,
    FindShortcutByCodeService,
    FindShortcutByIdService,
    UpdateShortcutService,
    ShortcutGeneratorService,
  ],
})
export class ShortcutModule {}
