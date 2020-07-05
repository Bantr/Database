import { MigrationInterface, QueryRunner } from 'typeorm';

export class addMatchmakingAuthData1593959166068 implements MigrationInterface {
  name = "addMatchmakingAuthData1593959166068";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "lastKnownMatch" text`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "matchAuthCode" text`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "matchAuthCode"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "lastKnownMatch"`,
      undefined
    );
  }
}
