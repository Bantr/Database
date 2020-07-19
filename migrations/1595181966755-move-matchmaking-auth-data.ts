import { MigrationInterface, QueryRunner } from 'typeorm';

export class moveMatchmakingAuthData1595181966755
  implements MigrationInterface {
  name = "moveMatchmakingAuthData1595181966755";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "lastKnownMatch"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "matchAuthCode"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "lastKnownMatch" text`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "matchAuthCode" text`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "matchAuthCode"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "lastKnownMatch"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "matchAuthCode" text`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "lastKnownMatch" text`,
      undefined
    );
  }
}
