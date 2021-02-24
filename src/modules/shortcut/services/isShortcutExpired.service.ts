import { Injectable } from '@nestjs/common';
import { differenceInDays } from 'date-fns';
import { ShortcutEntity } from '../entities/shortcut.entity';

@Injectable()
export class IsShortcutExpiredService {
  execute(shortcut: ShortcutEntity): boolean {
    const diffInDays = differenceInDays(new Date(), shortcut.createdAt);

    if (diffInDays >= 7) {
      return true;
    }

    return false;
  }
}
