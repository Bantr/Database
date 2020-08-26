import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCustomThemes1598471218948 implements MigrationInterface {
  name = "AddCustomThemes1598471218948";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "custom_theme" ("id" SERIAL NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "name" character varying NOT NULL, "config" jsonb NOT NULL, "userId" integer, CONSTRAINT "PK_ee2273f63ed69ca5841727fec42" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "custom_theme" ADD CONSTRAINT "FK_1411bee3694d38e0d353ad0cede" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "custom_theme" DROP CONSTRAINT "FK_1411bee3694d38e0d353ad0cede"`,
      undefined
    );
    await queryRunner.query(`DROP TABLE "custom_theme"`, undefined);
  }
}
