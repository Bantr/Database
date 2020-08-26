import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCheckConstraintsToLastKnownMatchAndMatchAuthCode1598473068986
  implements MigrationInterface {
  name = "AddCheckConstraintsToLastKnownMatchAndMatchAuthCode1598473068986";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD CONSTRAINT "CHK_ca74d1b3cdd1d6408a450be830" CHECK ("lastKnownMatch" SIMILAR TO 'CSGO-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}')`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD CONSTRAINT "CHK_0462e233c90d6ca6ef4928a84b" CHECK ("matchAuthCode" SIMILAR TO '[A-Za-z0-9]{4}-[A-Za-z0-9]{5}-[A-Za-z0-9]{4}')`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP CONSTRAINT "CHK_0462e233c90d6ca6ef4928a84b"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP CONSTRAINT "CHK_ca74d1b3cdd1d6408a450be830"`,
      undefined
    );
  }
}
