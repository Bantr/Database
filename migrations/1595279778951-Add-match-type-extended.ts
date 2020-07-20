import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMatchTypeExtended1595279778951 implements MigrationInterface {
  name = "AddMatchTypeExtended1595279778951";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match" ADD "typeExtended" character varying`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match" DROP COLUMN "typeExtended"`,
      undefined
    );
  }
}
