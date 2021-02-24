import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { ShortcutModule } from './modules/shortcut/shortcut.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ShortcutModule, UsersModule, CommonModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
