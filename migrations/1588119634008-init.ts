import {MigrationInterface, QueryRunner} from "typeorm";

export class init1588119634008 implements MigrationInterface {
    name = 'init1588119634008'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "match" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "type" integer NOT NULL, "externalId" character varying NOT NULL, CONSTRAINT "UQ_8140defdc978b18aa6e3b8a2871" UNIQUE ("externalId"), CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "seen" boolean NOT NULL DEFAULT false, "deleted" boolean NOT NULL DEFAULT false, "userId" integer, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_settings" ("id" SERIAL NOT NULL, "notificationDiscordEnabled" boolean NOT NULL DEFAULT true, "notificationVACEnabled" boolean NOT NULL DEFAULT true, "notificationGameEnabled" boolean NOT NULL DEFAULT true, "notificationCommunityEnabled" boolean NOT NULL DEFAULT false, "notificationEconomyEnabled" boolean NOT NULL DEFAULT false, "notificationFaceitEnabled" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_00f004f5922a0744d174530d639" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "steamId" text NOT NULL, "discordId" text, "faceitId" text, "faceitName" text, "role" text NOT NULL DEFAULT 'user', "settingsId" integer, CONSTRAINT "UQ_1618b9764cfe5f193c45aa38277" UNIQUE ("steamId"), CONSTRAINT "REL_390395c3d8592e3e8d8422ce85" UNIQUE ("settingsId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "player" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "steamId" character varying NOT NULL, "lastCheckedAt" TIMESTAMP NOT NULL DEFAULT '"1970-01-01T00:00:00.000Z"', "steamUsername" character varying, "steamAvatar" character varying, "steamProfile" character varying, CONSTRAINT "UQ_aab14547f7e31bcc1c8249181da" UNIQUE ("steamId"), CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TYPE "ban_type_enum" AS ENUM('Game', 'VAC', 'Economy', 'Faceit', 'Community', '0', '1', '2', '3', '4')`, undefined);
        await queryRunner.query(`CREATE TABLE "ban" ("id" SERIAL NOT NULL, "detectedAt" TIMESTAMP NOT NULL, "preExisting" boolean NOT NULL, "type" "ban_type_enum" NOT NULL, "unbanned" boolean NOT NULL DEFAULT false, "unbannedAt" TIMESTAMP, "playerId" integer, CONSTRAINT "PK_071cddb7d5f18439fd992490618" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "match_players_player" ("matchId" integer NOT NULL, "playerId" integer NOT NULL, CONSTRAINT "PK_107b050025f482dbe9076e74838" PRIMARY KEY ("matchId", "playerId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ab935eb5c2fac329c7ee3decd2" ON "match_players_player" ("matchId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_c54b13fd420cbffed15e077610" ON "match_players_player" ("playerId") `, undefined);
        await queryRunner.query(`CREATE TABLE "notification_bans_ban" ("notificationId" integer NOT NULL, "banId" integer NOT NULL, CONSTRAINT "PK_c6997e1725b520e476667eb285b" PRIMARY KEY ("notificationId", "banId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_175d393190bea410c061260b78" ON "notification_bans_ban" ("notificationId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_40415b3f2bdbd4b849afb28a0d" ON "notification_bans_ban" ("banId") `, undefined);
        await queryRunner.query(`CREATE TABLE "player_tracked_by_user" ("playerId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_b1fa0da2ed091481f223025976b" PRIMARY KEY ("playerId", "userId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_1c2f2f6697aa2ae9d6fd386891" ON "player_tracked_by_user" ("playerId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_50ad4fe57613ef1b323c0ad52f" ON "player_tracked_by_user" ("userId") `, undefined);
        await queryRunner.query(`CREATE TABLE "player_followed_by_user" ("playerId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_63fbab9dd219bc654adde090204" PRIMARY KEY ("playerId", "userId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_4c49fb56aaceed9553bd8312d1" ON "player_followed_by_user" ("playerId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_484a582bc24e7a1be58261aa0a" ON "player_followed_by_user" ("userId") `, undefined);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_1ced25315eb974b73391fb1c81b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_390395c3d8592e3e8d8422ce853" FOREIGN KEY ("settingsId") REFERENCES "user_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "ban" ADD CONSTRAINT "FK_3f0a8cd8a13f681c2e134ca4ec4" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "match_players_player" ADD CONSTRAINT "FK_ab935eb5c2fac329c7ee3decd2a" FOREIGN KEY ("matchId") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "match_players_player" ADD CONSTRAINT "FK_c54b13fd420cbffed15e0776107" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "notification_bans_ban" ADD CONSTRAINT "FK_175d393190bea410c061260b788" FOREIGN KEY ("notificationId") REFERENCES "notification"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "notification_bans_ban" ADD CONSTRAINT "FK_40415b3f2bdbd4b849afb28a0da" FOREIGN KEY ("banId") REFERENCES "ban"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "player_tracked_by_user" ADD CONSTRAINT "FK_1c2f2f6697aa2ae9d6fd386891d" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "player_tracked_by_user" ADD CONSTRAINT "FK_50ad4fe57613ef1b323c0ad52f8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "player_followed_by_user" ADD CONSTRAINT "FK_4c49fb56aaceed9553bd8312d10" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "player_followed_by_user" ADD CONSTRAINT "FK_484a582bc24e7a1be58261aa0a9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player_followed_by_user" DROP CONSTRAINT "FK_484a582bc24e7a1be58261aa0a9"`, undefined);
        await queryRunner.query(`ALTER TABLE "player_followed_by_user" DROP CONSTRAINT "FK_4c49fb56aaceed9553bd8312d10"`, undefined);
        await queryRunner.query(`ALTER TABLE "player_tracked_by_user" DROP CONSTRAINT "FK_50ad4fe57613ef1b323c0ad52f8"`, undefined);
        await queryRunner.query(`ALTER TABLE "player_tracked_by_user" DROP CONSTRAINT "FK_1c2f2f6697aa2ae9d6fd386891d"`, undefined);
        await queryRunner.query(`ALTER TABLE "notification_bans_ban" DROP CONSTRAINT "FK_40415b3f2bdbd4b849afb28a0da"`, undefined);
        await queryRunner.query(`ALTER TABLE "notification_bans_ban" DROP CONSTRAINT "FK_175d393190bea410c061260b788"`, undefined);
        await queryRunner.query(`ALTER TABLE "match_players_player" DROP CONSTRAINT "FK_c54b13fd420cbffed15e0776107"`, undefined);
        await queryRunner.query(`ALTER TABLE "match_players_player" DROP CONSTRAINT "FK_ab935eb5c2fac329c7ee3decd2a"`, undefined);
        await queryRunner.query(`ALTER TABLE "ban" DROP CONSTRAINT "FK_3f0a8cd8a13f681c2e134ca4ec4"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_390395c3d8592e3e8d8422ce853"`, undefined);
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_1ced25315eb974b73391fb1c81b"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_484a582bc24e7a1be58261aa0a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4c49fb56aaceed9553bd8312d1"`, undefined);
        await queryRunner.query(`DROP TABLE "player_followed_by_user"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_50ad4fe57613ef1b323c0ad52f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_1c2f2f6697aa2ae9d6fd386891"`, undefined);
        await queryRunner.query(`DROP TABLE "player_tracked_by_user"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_40415b3f2bdbd4b849afb28a0d"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_175d393190bea410c061260b78"`, undefined);
        await queryRunner.query(`DROP TABLE "notification_bans_ban"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_c54b13fd420cbffed15e077610"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ab935eb5c2fac329c7ee3decd2"`, undefined);
        await queryRunner.query(`DROP TABLE "match_players_player"`, undefined);
        await queryRunner.query(`DROP TABLE "ban"`, undefined);
        await queryRunner.query(`DROP TYPE "ban_type_enum"`, undefined);
        await queryRunner.query(`DROP TABLE "player"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "user_settings"`, undefined);
        await queryRunner.query(`DROP TABLE "notification"`, undefined);
        await queryRunner.query(`DROP TABLE "match"`, undefined);
    }

}
