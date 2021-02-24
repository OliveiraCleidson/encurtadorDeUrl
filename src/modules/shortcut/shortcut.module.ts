import { Module } from '@nestjs/common';
import { EncurtadorController } from './http/controller/encurtador.controller';
import { MyShortcutsController } from './http/controller/myShortcuts.controller';
import { RootController } from './http/controller/root.controller';
import urlValidatorProvider from './providers/urlValidator';
import shortcutRepositoryProvider from './repository';
import { FindAllShortcutsByUserIdService } from './services/findAllShortcutsByUserId.service';
import { FindShortcutByCodeService } from './services/findShortcutByCode.service';
import { FindShortcutByIdService } from './services/findShortcutById.service';
import { ShortcutGeneratorService } from './services/shortcutGenerator.service';
import { ShortnerService } from './services/shortner.service';
import { UpdateShortcutService } from './services/updateShortcut.service';

@Module({
  controllers: [EncurtadorController, MyShortcutsController, RootController],
  providers: [
    shortcutRepositoryProvider,
    urlValidatorProvider,
    ShortnerService,
    FindShortcutByCodeService,
    FindShortcutByIdService,
    UpdateShortcutService,
    ShortcutGeneratorService,
    FindAllShortcutsByUserIdService,
  ],
})
export class ShortcutModule {}
