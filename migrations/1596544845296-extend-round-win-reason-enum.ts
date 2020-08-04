import { MigrationInterface, QueryRunner } from 'typeorm';

export class extendRoundWinReasonEnum1596544845296
  implements MigrationInterface {
  name = "extendRoundWinReasonEnum1596544845296";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "round" RENAME COLUMN "winReason" TO "endReason"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" DROP COLUMN "endReason"`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "round_endreason_enum" AS ENUM('TargetBombed', 'VIPEscaped', 'VIPKilled', 'TerroristsEscaped', 'CTStoppedEscape', 'TerroristsStopped', 'BombDefused', 'CTWin', 'TerroristWin', 'Draw', 'HostagesRescued', 'TargetSaved', 'HostagesNotRescued', 'TerroristsNotEscaped', 'VIPNotEscaped', 'GameStart', 'TerroristsSurrender', 'CTSurrender', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18')`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" ADD "endReason" "round_endreason_enum" NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "round" DROP COLUMN "endReason"`,
      undefined
    );
    await queryRunner.query(`DROP TYPE "round_endreason_enum"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "round" ADD "endReason" integer NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" RENAME COLUMN "endReason" TO "winReason"`,
      undefined
    );
  }
}
