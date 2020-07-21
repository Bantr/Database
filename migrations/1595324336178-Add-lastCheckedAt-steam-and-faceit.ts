import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLastCheckedAtSteamAndFaceit1595324336178 implements MigrationInterface {
    name = 'AddLastCheckedAtSteamAndFaceit1595324336178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "lastCheckedAtFaceit" TIMESTAMP NOT NULL DEFAULT '"1970-01-01T00:00:00.000Z"'`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastCheckedAtSteam" TIMESTAMP NOT NULL DEFAULT '"1970-01-01T00:00:00.000Z"'`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastCheckedAtSteam"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastCheckedAtFaceit"`, undefined);
    }

}
