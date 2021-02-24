import { MigrationInterface, QueryRunner } from 'typeorm';

export class ShortcutCreatedAtColumn1614180788180
  implements MigrationInterface {
  name = 'ShortcutCreatedAtColumn1614180788180';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "shortcuts" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "shortcuts" DROP COLUMN "createdAt"`);
  }
}
