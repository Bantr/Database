import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangesToPositionEntity1596832130164
  implements MigrationInterface {
  name = "ChangesToPositionEntity1596832130164";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "position" DROP COLUMN "x"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" ADD "x" real NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" DROP COLUMN "y"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" ADD "y" real NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" DROP COLUMN "z"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" ADD "z" real NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "position" DROP COLUMN "z"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" ADD "z" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" DROP COLUMN "y"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" ADD "y" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" DROP COLUMN "x"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "position" ADD "x" integer NOT NULL`,
      undefined
    );
  }
}
