import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTeamHandleAndStartingSide1596539735731
  implements MigrationInterface {
  name = "addTeamHandleAndStartingSide1596539735731";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "team" ADD "handle" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "team_startingside_enum" AS ENUM('Unassigned', 'Spectator', 'Terrorist', 'CounterTerrorist', '0', '1', '2', '3')`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team" ADD "startingSide" "team_startingside_enum" NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "team" DROP COLUMN "startingSide"`,
      undefined
    );
    await queryRunner.query(`DROP TYPE "team_startingside_enum"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "team" DROP COLUMN "handle"`,
      undefined
    );
  }
}
