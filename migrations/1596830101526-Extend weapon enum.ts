import { MigrationInterface, QueryRunner } from 'typeorm';

export class ExtendWeaponEnum1596830101526 implements MigrationInterface {
  name = "ExtendWeaponEnum1596830101526";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "public"."player_info_weapon_enum" RENAME TO "player_info_weapon_enum_old"`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "player_info_weapon_enum" AS ENUM('Knife', 'P2000', 'USP', 'Glock', 'P250', 'FiveSeven', 'Tec9', 'CZ75', 'DualBerettas', 'DesertEagle', 'R8Revolver', 'Nova', 'XM1014', 'Mag7', 'SawedOff', 'MP9', 'PPBizon', 'MP7', 'UMP45', 'P90', 'MP5', 'Famas', 'Galil', 'M4A4', 'M4A1S', 'AK47', 'AUG', 'SG556', 'SSG08', 'AWP', 'SCAR20', 'G3SG1', 'M249', 'Negev', 'Healthshot', 'TAGrenade', 'Taser', 'SmokeGrenade', 'Flashbang', 'HEGrenade', 'IncendiaryGrenade', 'Molotov', 'Decoy', 'C4', 'MAC10', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44')`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" ALTER COLUMN "weapon" TYPE "player_info_weapon_enum" USING "weapon"::"text"::"player_info_weapon_enum"`,
      undefined
    );
    await queryRunner.query(
      `DROP TYPE "player_info_weapon_enum_old"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" ALTER COLUMN "weapon" DROP NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `ALTER TYPE "public"."weapon_status_weapon_enum" RENAME TO "weapon_status_weapon_enum_old"`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "weapon_status_weapon_enum" AS ENUM('Knife', 'P2000', 'USP', 'Glock', 'P250', 'FiveSeven', 'Tec9', 'CZ75', 'DualBerettas', 'DesertEagle', 'R8Revolver', 'Nova', 'XM1014', 'Mag7', 'SawedOff', 'MP9', 'PPBizon', 'MP7', 'UMP45', 'P90', 'MP5', 'Famas', 'Galil', 'M4A4', 'M4A1S', 'AK47', 'AUG', 'SG556', 'SSG08', 'AWP', 'SCAR20', 'G3SG1', 'M249', 'Negev', 'Healthshot', 'TAGrenade', 'Taser', 'SmokeGrenade', 'Flashbang', 'HEGrenade', 'IncendiaryGrenade', 'Molotov', 'Decoy', 'C4', 'MAC10', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44')`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" ALTER COLUMN "weapon" TYPE "weapon_status_weapon_enum" USING "weapon"::"text"::"weapon_status_weapon_enum"`,
      undefined
    );
    await queryRunner.query(
      `DROP TYPE "weapon_status_weapon_enum_old"`,
      undefined
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "weapon_status_weapon_enum_old" AS ENUM('0', '1', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '2', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '3', '30', '31', '32', '33', '4', '5', '6', '7', '8', '9', 'AK47', 'AUG', 'AWP', 'CZ75', 'DesertEagle', 'DualBerettas', 'Famas', 'FiveSeven', 'G3SG1', 'Galil', 'Glock', 'Knife', 'M249', 'M4A1S', 'M4A4', 'MP5', 'MP7', 'MP9', 'Mag7', 'Negev', 'Nova', 'P200', 'P250', 'P90', 'PPBizon', 'R8Revolver', 'SCAR20', 'SG553', 'SSG08', 'SawedOff', 'Tec9', 'UMP45', 'USP', 'XM1014')`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" ALTER COLUMN "weapon" TYPE "weapon_status_weapon_enum_old" USING "weapon"::"text"::"weapon_status_weapon_enum_old"`,
      undefined
    );
    await queryRunner.query(`DROP TYPE "weapon_status_weapon_enum"`, undefined);
    await queryRunner.query(
      `ALTER TYPE "weapon_status_weapon_enum_old" RENAME TO  "weapon_status_weapon_enum"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" ALTER COLUMN "weapon" SET NOT NULL`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "player_info_weapon_enum_old" AS ENUM('0', '1', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '2', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '3', '30', '31', '32', '33', '4', '5', '6', '7', '8', '9', 'AK47', 'AUG', 'AWP', 'CZ75', 'DesertEagle', 'DualBerettas', 'Famas', 'FiveSeven', 'G3SG1', 'Galil', 'Glock', 'Knife', 'M249', 'M4A1S', 'M4A4', 'MP5', 'MP7', 'MP9', 'Mag7', 'Negev', 'Nova', 'P200', 'P250', 'P90', 'PPBizon', 'R8Revolver', 'SCAR20', 'SG553', 'SSG08', 'SawedOff', 'Tec9', 'UMP45', 'USP', 'XM1014')`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" ALTER COLUMN "weapon" TYPE "player_info_weapon_enum_old" USING "weapon"::"text"::"player_info_weapon_enum_old"`,
      undefined
    );
    await queryRunner.query(`DROP TYPE "player_info_weapon_enum"`, undefined);
    await queryRunner.query(
      `ALTER TYPE "player_info_weapon_enum_old" RENAME TO  "player_info_weapon_enum"`,
      undefined
    );
  }
}
