import { ShortcutsRepositoryIMP } from './imp/shortcuts.repository';
import { ShortcutsRepository } from './shortcuts.repository';

const shortcutRepositoryProvider = {
  useClass: ShortcutsRepositoryIMP,
  provide: ShortcutsRepository,
};

export default shortcutRepositoryProvider;
