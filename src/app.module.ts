import { Module } from '@nestjs/common';
import { ShortcutModule } from './modules/shortcut/shortcut.module';

@Module({
  imports: [ShortcutModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
