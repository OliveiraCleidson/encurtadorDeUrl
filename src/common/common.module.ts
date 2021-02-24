import { Global, Module } from '@nestjs/common';
import hashProvider from './providers/hashProvider';

@Global()
@Module({
  controllers: [],
  providers: [hashProvider],
  exports: [hashProvider],
})
export class CommonModule {}
