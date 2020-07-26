import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixSomeJoinTables1595778846966 implements MigrationInterface {
  name = "fixSomeJoinTables1595778846966";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "match_teams_team" ("matchId" integer NOT NULL, "teamId" integer NOT NULL, CONSTRAINT "PK_5e840839aa34237a37a2e4ed01a" PRIMARY KEY ("matchId", "teamId"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a25e231842e46b018441c84f00" ON "match_teams_team" ("matchId") `,
      undefined
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1c65d0c6cf67a4c3a06f0fef42" ON "match_teams_team" ("teamId") `,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match_teams_team" ADD CONSTRAINT "FK_a25e231842e46b018441c84f001" FOREIGN KEY ("matchId") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match_teams_team" ADD CONSTRAINT "FK_1c65d0c6cf67a4c3a06f0fef42e" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "match_teams_team" DROP CONSTRAINT "FK_1c65d0c6cf67a4c3a06f0fef42e"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "match_teams_team" DROP CONSTRAINT "FK_a25e231842e46b018441c84f001"`,
      undefined
    );
    await queryRunner.query(
      `DROP INDEX "IDX_1c65d0c6cf67a4c3a06f0fef42"`,
      undefined
    );
    await queryRunner.query(
      `DROP INDEX "IDX_a25e231842e46b018441c84f00"`,
      undefined
    );
    await queryRunner.query(`DROP TABLE "match_teams_team"`, undefined);
  }
}
