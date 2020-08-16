import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLastActive1597577813716 implements MigrationInterface {
  name = "AddLastActive1597577813716";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "lastActive" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "lastActive"`,
      undefined
    );
  }
}
