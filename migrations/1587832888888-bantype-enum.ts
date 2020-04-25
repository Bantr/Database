import { MigrationInterface, QueryRunner } from "typeorm";

export class bantypeEnum1587832888888 implements MigrationInterface {
    name = 'bantypeEnum1587832888888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ban" DROP COLUMN "type"`, undefined);
        await queryRunner.query(`CREATE TYPE "ban_type_enum" AS ENUM('Game', 'VAC', 'Economy', 'Faceit', 'Community')`, undefined);
        await queryRunner.query(`ALTER TABLE "ban" ADD "type" "ban_type_enum" NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ban" DROP COLUMN "type"`, undefined);
        await queryRunner.query(`DROP TYPE "ban_type_enum"`, undefined);
        await queryRunner.query(`ALTER TABLE "ban" ADD "type" integer NOT NULL`, undefined);
    }

}
