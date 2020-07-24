import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLotsIngameInfo1595532035147 implements MigrationInterface {
  name = "AddLotsIngameInfo1595532035147";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "team" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying, "roundsWonId" integer, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "round" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "startTick" integer NOT NULL, "endTick" integer NOT NULL, "winReason" integer NOT NULL, "matchId" integer, CONSTRAINT "PK_34bd959f3f4a90eb86e4ae24d2d" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "position" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "x" integer NOT NULL, "y" integer NOT NULL, "z" integer NOT NULL, CONSTRAINT "PK_b7f483581562b4dc62ae1a5b7e2" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "player_info_weapon_enum" AS ENUM('Knife', 'P200', 'USP', 'Glock', 'P250', 'FiveSeven', 'Tec9', 'CZ75', 'DualBerettas', 'DesertEagle', 'R8Revolver', 'Nova', 'XM1014', 'Mag7', 'SawedOff', 'MP9', 'PPBizon', 'MP7', 'UMP45', 'P90', 'MP5', 'Famas', 'Galil', 'M4A4', 'M4A1S', 'AK47', 'AUG', 'SG553', 'SSG08', 'AWP', 'SCAR20', 'G3SG1', 'M249', 'Negev', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33')`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "player_info" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "equipmentValue" integer NOT NULL, "freezeTimeEndEquipmentValue" integer NOT NULL, "cashSpentInRound" integer NOT NULL, "hasC4" boolean NOT NULL, "health" integer NOT NULL, "armour" integer NOT NULL, "isScoped" boolean NOT NULL, "weapon" "player_info_weapon_enum" NOT NULL, "bulletsInMagazine" integer NOT NULL, "playerId" integer, CONSTRAINT "PK_0d42212f46cf376d2ef91116704" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "bomb_status_type_enum" AS ENUM('Planted', 'Defused', 'StartDefuse', 'StopDefuse', 'Dropped', 'PickedUp', 'Exploded', '0', '1', '2', '3', '4', '5', '6')`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "bomb_status" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "type" "bomb_status_type_enum" NOT NULL, "roundId" integer, CONSTRAINT "PK_b2ee5ae6aa7678e96ce7205a18e" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "kill" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "throughSmoke" boolean NOT NULL, "whileBlind" boolean NOT NULL, "throughWall" boolean NOT NULL, "roundId" integer, CONSTRAINT "PK_8264cb6c8543bd37675fd6d2580" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "player_blind" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "duration" integer NOT NULL, "roundId" integer, CONSTRAINT "PK_1fa32b75d4152b8762c9f2af810" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "player_hurt" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "damageArmour" integer NOT NULL, "damageHealth" integer NOT NULL, "hitGroup" integer NOT NULL, "source" integer NOT NULL, "roundId" integer, CONSTRAINT "PK_e2c4b8cd585012f80929b2193b8" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "player_jump" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "roundId" integer, CONSTRAINT "PK_071d67a1d276021eaa191b2fd74" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "utility_activated_type_enum" AS ENUM('Smoke', 'HighExplosiveGrenade', 'Decoy', 'Molotov', 'Flash', 'Snowball', 'TacticalAwarenessGrenade', '0', '1', '2', '3', '4', '5', '6')`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "utility_activated" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "type" "utility_activated_type_enum" NOT NULL, "entityId" integer NOT NULL, "roundId" integer, CONSTRAINT "PK_52f11ab2f104997ebe6f869ea65" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "utility_thrown_type_enum" AS ENUM('Smoke', 'HighExplosiveGrenade', 'Decoy', 'Molotov', 'Flash', 'Snowball', 'TacticalAwarenessGrenade', '0', '1', '2', '3', '4', '5', '6')`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "utility_thrown" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "type" "utility_thrown_type_enum" NOT NULL, "entityId" integer NOT NULL, "roundId" integer, CONSTRAINT "PK_03cf1304df6cbd15195991df9dd" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TYPE "weapon_status_weapon_enum" AS ENUM('Knife', 'P200', 'USP', 'Glock', 'P250', 'FiveSeven', 'Tec9', 'CZ75', 'DualBerettas', 'DesertEagle', 'R8Revolver', 'Nova', 'XM1014', 'Mag7', 'SawedOff', 'MP9', 'PPBizon', 'MP7', 'UMP45', 'P90', 'MP5', 'Famas', 'Galil', 'M4A4', 'M4A1S', 'AK47', 'AUG', 'SG553', 'SSG08', 'AWP', 'SCAR20', 'G3SG1', 'M249', 'Negev', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33')`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "weapon_status" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tick" integer NOT NULL, "weapon" "weapon_status_weapon_enum" NOT NULL, "type" integer NOT NULL, "roundId" integer, CONSTRAINT "PK_4714c7704d21b2c9328ac90c39f" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "team_players_player" ("teamId" integer NOT NULL, "playerId" integer NOT NULL, CONSTRAINT "PK_30ad7c7427cb452e63ff4d4f9a0" PRIMARY KEY ("teamId", "playerId"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_03530e45522b82c6ae46d825dd" ON "team_players_player" ("teamId") `,
      undefined
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a5a5ca467eb43bf810ce32a119" ON "team_players_player" ("playerId") `,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "team_matches_match" ("teamId" integer NOT NULL, "matchId" integer NOT NULL, CONSTRAINT "PK_a8fa5aef8ca0cf27bde29f5fa7c" PRIMARY KEY ("teamId", "matchId"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_93819ccfdcce150379dc206b4a" ON "team_matches_match" ("teamId") `,
      undefined
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_bb8410737b478e3b3e8bb8aad9" ON "team_matches_match" ("matchId") `,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team" ADD CONSTRAINT "FK_57cbf6a5c5441201714a6658002" FOREIGN KEY ("roundsWonId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" ADD CONSTRAINT "FK_7f3ebe2c9b6582d68973dd1de22" FOREIGN KEY ("matchId") REFERENCES "match"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" ADD CONSTRAINT "FK_22cee42dd78530aaaa642190e7f" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" ADD CONSTRAINT "FK_7ab59502c18b50c7442ff861ec6" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD CONSTRAINT "FK_5aa4617cdbffcf03dd28856d669" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" ADD CONSTRAINT "FK_f7da2dd9476901e0ba1776fe481" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" ADD CONSTRAINT "FK_1951f31a3dea3c12e73b913b869" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_jump" ADD CONSTRAINT "FK_c89668877fe92ef47b0b221656b" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_activated" ADD CONSTRAINT "FK_1c41e12cd4d459df374d82e4be8" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" ADD CONSTRAINT "FK_fa90f3265605fc1e17860066213" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" ADD CONSTRAINT "FK_fa268657ffbc0bd8fed2fac5517" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team_players_player" ADD CONSTRAINT "FK_03530e45522b82c6ae46d825dd1" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team_players_player" ADD CONSTRAINT "FK_a5a5ca467eb43bf810ce32a119d" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team_matches_match" ADD CONSTRAINT "FK_93819ccfdcce150379dc206b4a5" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team_matches_match" ADD CONSTRAINT "FK_bb8410737b478e3b3e8bb8aad9c" FOREIGN KEY ("matchId") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "team_matches_match" DROP CONSTRAINT "FK_bb8410737b478e3b3e8bb8aad9c"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team_matches_match" DROP CONSTRAINT "FK_93819ccfdcce150379dc206b4a5"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team_players_player" DROP CONSTRAINT "FK_a5a5ca467eb43bf810ce32a119d"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team_players_player" DROP CONSTRAINT "FK_03530e45522b82c6ae46d825dd1"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" DROP CONSTRAINT "FK_fa268657ffbc0bd8fed2fac5517"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" DROP CONSTRAINT "FK_fa90f3265605fc1e17860066213"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_activated" DROP CONSTRAINT "FK_1c41e12cd4d459df374d82e4be8"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_jump" DROP CONSTRAINT "FK_c89668877fe92ef47b0b221656b"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" DROP CONSTRAINT "FK_1951f31a3dea3c12e73b913b869"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" DROP CONSTRAINT "FK_f7da2dd9476901e0ba1776fe481"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP CONSTRAINT "FK_5aa4617cdbffcf03dd28856d669"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" DROP CONSTRAINT "FK_7ab59502c18b50c7442ff861ec6"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" DROP CONSTRAINT "FK_22cee42dd78530aaaa642190e7f"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "round" DROP CONSTRAINT "FK_7f3ebe2c9b6582d68973dd1de22"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "team" DROP CONSTRAINT "FK_57cbf6a5c5441201714a6658002"`,
      undefined
    );
    await queryRunner.query(
      `DROP INDEX "IDX_bb8410737b478e3b3e8bb8aad9"`,
      undefined
    );
    await queryRunner.query(
      `DROP INDEX "IDX_93819ccfdcce150379dc206b4a"`,
      undefined
    );
    await queryRunner.query(`DROP TABLE "team_matches_match"`, undefined);
    await queryRunner.query(
      `DROP INDEX "IDX_a5a5ca467eb43bf810ce32a119"`,
      undefined
    );
    await queryRunner.query(
      `DROP INDEX "IDX_03530e45522b82c6ae46d825dd"`,
      undefined
    );
    await queryRunner.query(`DROP TABLE "team_players_player"`, undefined);
    await queryRunner.query(`DROP TABLE "weapon_status"`, undefined);
    await queryRunner.query(`DROP TYPE "weapon_status_weapon_enum"`, undefined);
    await queryRunner.query(`DROP TABLE "utility_thrown"`, undefined);
    await queryRunner.query(`DROP TYPE "utility_thrown_type_enum"`, undefined);
    await queryRunner.query(`DROP TABLE "utility_activated"`, undefined);
    await queryRunner.query(
      `DROP TYPE "utility_activated_type_enum"`,
      undefined
    );
    await queryRunner.query(`DROP TABLE "player_jump"`, undefined);
    await queryRunner.query(`DROP TABLE "player_hurt"`, undefined);
    await queryRunner.query(`DROP TABLE "player_blind"`, undefined);
    await queryRunner.query(`DROP TABLE "kill"`, undefined);
    await queryRunner.query(`DROP TABLE "bomb_status"`, undefined);
    await queryRunner.query(`DROP TYPE "bomb_status_type_enum"`, undefined);
    await queryRunner.query(`DROP TABLE "player_info"`, undefined);
    await queryRunner.query(`DROP TYPE "player_info_weapon_enum"`, undefined);
    await queryRunner.query(`DROP TABLE "position"`, undefined);
    await queryRunner.query(`DROP TABLE "round"`, undefined);
    await queryRunner.query(`DROP TABLE "team"`, undefined);
  }
}
