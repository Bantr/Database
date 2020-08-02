import { MigrationInterface, QueryRunner } from 'typeorm';

export class addOfficialEndTick1596394094952 implements MigrationInterface {
  name = "addOfficialEndTick1596394094952";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "round" ADD "officialEndTick" integer NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "round" DROP COLUMN "officialEndTick"`,
      undefined
    );
  }
}
