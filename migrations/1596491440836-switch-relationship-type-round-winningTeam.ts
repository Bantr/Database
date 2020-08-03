import { MigrationInterface, QueryRunner } from 'typeorm';

export class switchRelationshipTypeRoundWinningTeam1596491440836
  implements MigrationInterface {
  name = "switchRelationshipTypeRoundWinningTeam1596491440836";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "team" DROP CONSTRAINT "FK_57cbf6a5c5441201714a6658002"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team" DROP COLUMN "roundsWonId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" ADD "winningTeamId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" ADD CONSTRAINT "FK_628dc5f563c5356c4e64eb3b9c9" FOREIGN KEY ("winningTeamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "round" DROP CONSTRAINT "FK_628dc5f563c5356c4e64eb3b9c9"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" DROP COLUMN "winningTeamId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team" ADD "roundsWonId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team" ADD CONSTRAINT "FK_57cbf6a5c5441201714a6658002" FOREIGN KEY ("roundsWonId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
  }
}
