import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLayoutSettings1598474531714 implements MigrationInterface {
  name = "AddLayoutSettings1598474531714";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "layoutSettings" jsonb`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "layoutSettings"`,
      undefined
    );
  }
}
