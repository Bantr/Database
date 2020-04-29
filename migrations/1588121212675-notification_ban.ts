import { MigrationInterface, QueryRunner } from 'typeorm';

export class notificationBan1588121212675 implements MigrationInterface {
    name = 'notificationBan1588121212675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notification" ADD "banId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_6a5cbf408c147d802ed2b8c6dec" FOREIGN KEY ("banId") REFERENCES "ban"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_6a5cbf408c147d802ed2b8c6dec"`, undefined);
        await queryRunner.query(`ALTER TABLE "notification" DROP COLUMN "banId"`, undefined);
    }

}
