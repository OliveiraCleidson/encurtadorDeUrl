import { Module } from '@nestjs/common';
import { ShortcutModule } from './modules/shortcut/shortcut.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ShortcutModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
