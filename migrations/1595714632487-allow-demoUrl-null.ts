import { MigrationInterface, QueryRunner } from 'typeorm';

export class allowDemoUrlNull1595714632487 implements MigrationInterface {
  name = "allowDemoUrlNull1595714632487";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match" ALTER COLUMN "demoUrl" DROP NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match" ALTER COLUMN "demoUrl" SET NOT NULL`,
      undefined
    );
  }
}
