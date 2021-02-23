import { ShortcutEntityIMP } from '@/modules/shortcut/entities/imp/shortcut.entity';
import { Logger } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { shortcutEntity1614118223657 } from './migrations/1614118223657-shortcutEntity';
import { UserEntity1614121105766 } from './migrations/1614121105766-UserEntity';

async function connectToDatabase() {
  const logger: Logger = new Logger('Database');
  try {
    const connection = await createConnection({
      name: 'default',
      type: process.env.TYPEORM_CONNECTION as 'postgres',
      host: process.env.TYPEORM_HOST as string,
      port: parseInt(process.env.TYPEORM_PORT || '5432', 10) as number,
      username: process.env.TYPEORM_USERNAME as string,
      password: process.env.TYPEORM_PASSWORD as string,
      database: process.env.TYPEORM_DATABASE,
      entities: [ShortcutEntityIMP],
      migrations: [shortcutEntity1614118223657, UserEntity1614121105766],
    });
    logger.log(
      `Banco de dados conectado! Ambiente de: ${process.env.NODE_ENV}`,
    );

    connection
      .runMigrations()
      .then(() => logger.log('Migrações OK'))
      .catch(err => logger.log(`Erro nas migrações: ${JSON.stringify(err)}`));
  } catch (err) {
    logger.log('Nao foi possivel se conectar ao banco de dados.');
    logger.log(JSON.stringify(err));
    console.log(err);
  }
}

export default connectToDatabase;
