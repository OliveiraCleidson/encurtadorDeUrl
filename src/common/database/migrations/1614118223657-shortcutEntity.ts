import { MigrationInterface, QueryRunner } from 'typeorm';

export class shortcutEntity1614118223657 implements MigrationInterface {
  name = 'shortcutEntity1614118223657';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "shortcuts" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "baseLink" character varying NOT NULL, "userId" character varying, CONSTRAINT "PK_803e3cdc1aa06c3706f029a848f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "shortcuts"`);
  }
}
