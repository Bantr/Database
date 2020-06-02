import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDemoUrl1591107559483 implements MigrationInterface {
    name = 'addDemoUrl1591107559483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "match" ADD "demoUrl" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "match" ALTER COLUMN "type" DROP NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "match" ALTER COLUMN "type" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "match" DROP COLUMN "demoUrl"`, undefined);
    }

}
