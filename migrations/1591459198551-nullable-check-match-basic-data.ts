import { MigrationInterface, QueryRunner } from 'typeorm';

export class nullableCheckMatchBasicData1591459198551
  implements MigrationInterface {
  name = "nullableCheckMatchBasicData1591459198551";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match" ALTER COLUMN "map" DROP NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match" ALTER COLUMN "tickrate" DROP NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match" ALTER COLUMN "durationTicks" DROP NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match" ALTER COLUMN "durationTicks" SET NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match" ALTER COLUMN "tickrate" SET NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match" ALTER COLUMN "map" SET NOT NULL`,
      undefined
    );
  }
}
