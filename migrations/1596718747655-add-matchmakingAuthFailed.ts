import { MigrationInterface, QueryRunner } from 'typeorm';

export class addMatchmakingAuthFailed1596718747655
  implements MigrationInterface {
  name = "addMatchmakingAuthFailed1596718747655";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "matchmakingAuthFailed" boolean NOT NULL DEFAULT false`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "matchmakingAuthFailed"`,
      undefined
    );
  }
}
