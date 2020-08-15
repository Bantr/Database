import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoundType1597502514290 implements MigrationInterface {
  name = "AddRoundType1597502514290";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "round_type_enum" AS ENUM('Normal', 'Knife', '0', '1')`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" ADD "type" "round_type_enum" NOT NULL DEFAULT '0'`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "round" DROP COLUMN "type"`,
      undefined
    );
    await queryRunner.query(`DROP TYPE "round_type_enum"`, undefined);
  }
}
