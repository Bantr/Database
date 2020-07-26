import { MigrationInterface, QueryRunner } from 'typeorm';

export class demoUrlNull1595777876167 implements MigrationInterface {
  name = "demoUrlNull1595777876167";

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
