import { MigrationInterface, QueryRunner } from 'typeorm';

export class addBasicMatchData1591457592579 implements MigrationInterface {
  name = "addBasicMatchData1591457592579";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match" ADD "map" character varying NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match" ADD "tickrate" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match" ADD "durationTicks" integer NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match" DROP COLUMN "durationTicks"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match" DROP COLUMN "tickrate"`,
      undefined
    );
    await queryRunner.query(`ALTER TABLE "match" DROP COLUMN "map"`, undefined);
  }
}
