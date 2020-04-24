import {MigrationInterface, QueryRunner} from "typeorm";

export class init1587739937417 implements MigrationInterface {
    name = 'init1587739937417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "match" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "type" integer NOT NULL, "externalId" character varying NOT NULL, CONSTRAINT "UQ_8140defdc978b18aa6e3b8a2871" UNIQUE ("externalId"), CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_settings" ("id" SERIAL NOT NULL, "notificationDiscordEnabled" boolean NOT NULL DEFAULT true, "notificationVACEnabled" boolean NOT NULL DEFAULT true, "notificationGameEnabled" boolean NOT NULL DEFAULT true, "notificationCommunityEnabled" boolean NOT NULL DEFAULT false, "notificationEconomyEnabled" boolean NOT NULL DEFAULT false, "notificationFaceitEnabled" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_00f004f5922a0744d174530d639" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "seen" boolean NOT NULL DEFAULT false, "deleted" boolean NOT NULL DEFAULT false, "userId" integer, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "steamId" text NOT NULL, "discordId" text, "faceitId" text, "faceitName" text, "role" text NOT NULL DEFAULT 'user', "settingsId" integer, CONSTRAINT "UQ_1618b9764cfe5f193c45aa38277" UNIQUE ("steamId"), CONSTRAINT "REL_390395c3d8592e3e8d8422ce85" UNIQUE ("settingsId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tracked_account" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "steamId" character varying NOT NULL, "lastCheckedAt" TIMESTAMP NOT NULL DEFAULT '"1970-01-01T00:00:00.000Z"', "steamUsername" character varying, "steamAvatar" character varying, "steamProfile" character varying, CONSTRAINT "UQ_6eb33372230de8c16a983271e86" UNIQUE ("steamId"), CONSTRAINT "PK_d86b80cf7794b635cdc22f5451d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "ban" ("id" SERIAL NOT NULL, "detectedAt" TIMESTAMP NOT NULL, "preExisting" boolean NOT NULL, "type" integer NOT NULL, "unbanned" boolean NOT NULL DEFAULT false, "unbannedAt" TIMESTAMP, "trackedAccountId" integer, CONSTRAINT "PK_071cddb7d5f18439fd992490618" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "match_players_tracked_account" ("matchId" integer NOT NULL, "trackedAccountId" integer NOT NULL, CONSTRAINT "PK_c45b9c3867b7a5ad24d4ff8aaac" PRIMARY KEY ("matchId", "trackedAccountId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_f34150bbaec794b9747c071100" ON "match_players_tracked_account" ("matchId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_49a488f34ab352ccce23f4817c" ON "match_players_tracked_account" ("trackedAccountId") `, undefined);
        await queryRunner.query(`CREATE TABLE "notification_bans_ban" ("notificationId" integer NOT NULL, "banId" integer NOT NULL, CONSTRAINT "PK_c6997e1725b520e476667eb285b" PRIMARY KEY ("notificationId", "banId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_175d393190bea410c061260b78" ON "notification_bans_ban" ("notificationId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_40415b3f2bdbd4b849afb28a0d" ON "notification_bans_ban" ("banId") `, undefined);
        await queryRunner.query(`CREATE TABLE "tracked_account_tracked_by_user" ("trackedAccountId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_65543be45d924232b376a0b1b67" PRIMARY KEY ("trackedAccountId", "userId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9a85add7cedf9b1bbfafe57fd0" ON "tracked_account_tracked_by_user" ("trackedAccountId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9a38ec4315fc0f192ce93e4963" ON "tracked_account_tracked_by_user" ("userId") `, undefined);
        await queryRunner.query(`CREATE TABLE "tracked_account_followed_by_user" ("trackedAccountId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_83067f67b5e49ddb4031733d163" PRIMARY KEY ("trackedAccountId", "userId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_bca712934d6554107432f6cc72" ON "tracked_account_followed_by_user" ("trackedAccountId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_16a0a17ac03730b5d703f4d0d4" ON "tracked_account_followed_by_user" ("userId") `, undefined);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_1ced25315eb974b73391fb1c81b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_390395c3d8592e3e8d8422ce853" FOREIGN KEY ("settingsId") REFERENCES "user_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "ban" ADD CONSTRAINT "FK_5afebbd610cfe59e36bb590f147" FOREIGN KEY ("trackedAccountId") REFERENCES "tracked_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "match_players_tracked_account" ADD CONSTRAINT "FK_f34150bbaec794b9747c0711007" FOREIGN KEY ("matchId") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "match_players_tracked_account" ADD CONSTRAINT "FK_49a488f34ab352ccce23f4817c9" FOREIGN KEY ("trackedAccountId") REFERENCES "tracked_account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "notification_bans_ban" ADD CONSTRAINT "FK_175d393190bea410c061260b788" FOREIGN KEY ("notificationId") REFERENCES "notification"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "notification_bans_ban" ADD CONSTRAINT "FK_40415b3f2bdbd4b849afb28a0da" FOREIGN KEY ("banId") REFERENCES "ban"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tracked_account_tracked_by_user" ADD CONSTRAINT "FK_9a85add7cedf9b1bbfafe57fd0e" FOREIGN KEY ("trackedAccountId") REFERENCES "tracked_account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tracked_account_tracked_by_user" ADD CONSTRAINT "FK_9a38ec4315fc0f192ce93e49638" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tracked_account_followed_by_user" ADD CONSTRAINT "FK_bca712934d6554107432f6cc72a" FOREIGN KEY ("trackedAccountId") REFERENCES "tracked_account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tracked_account_followed_by_user" ADD CONSTRAINT "FK_16a0a17ac03730b5d703f4d0d4f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tracked_account_followed_by_user" DROP CONSTRAINT "FK_16a0a17ac03730b5d703f4d0d4f"`, undefined);
        await queryRunner.query(`ALTER TABLE "tracked_account_followed_by_user" DROP CONSTRAINT "FK_bca712934d6554107432f6cc72a"`, undefined);
        await queryRunner.query(`ALTER TABLE "tracked_account_tracked_by_user" DROP CONSTRAINT "FK_9a38ec4315fc0f192ce93e49638"`, undefined);
        await queryRunner.query(`ALTER TABLE "tracked_account_tracked_by_user" DROP CONSTRAINT "FK_9a85add7cedf9b1bbfafe57fd0e"`, undefined);
        await queryRunner.query(`ALTER TABLE "notification_bans_ban" DROP CONSTRAINT "FK_40415b3f2bdbd4b849afb28a0da"`, undefined);
        await queryRunner.query(`ALTER TABLE "notification_bans_ban" DROP CONSTRAINT "FK_175d393190bea410c061260b788"`, undefined);
        await queryRunner.query(`ALTER TABLE "match_players_tracked_account" DROP CONSTRAINT "FK_49a488f34ab352ccce23f4817c9"`, undefined);
        await queryRunner.query(`ALTER TABLE "match_players_tracked_account" DROP CONSTRAINT "FK_f34150bbaec794b9747c0711007"`, undefined);
        await queryRunner.query(`ALTER TABLE "ban" DROP CONSTRAINT "FK_5afebbd610cfe59e36bb590f147"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_390395c3d8592e3e8d8422ce853"`, undefined);
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_1ced25315eb974b73391fb1c81b"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_16a0a17ac03730b5d703f4d0d4"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_bca712934d6554107432f6cc72"`, undefined);
        await queryRunner.query(`DROP TABLE "tracked_account_followed_by_user"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9a38ec4315fc0f192ce93e4963"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9a85add7cedf9b1bbfafe57fd0"`, undefined);
        await queryRunner.query(`DROP TABLE "tracked_account_tracked_by_user"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_40415b3f2bdbd4b849afb28a0d"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_175d393190bea410c061260b78"`, undefined);
        await queryRunner.query(`DROP TABLE "notification_bans_ban"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_49a488f34ab352ccce23f4817c"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_f34150bbaec794b9747c071100"`, undefined);
        await queryRunner.query(`DROP TABLE "match_players_tracked_account"`, undefined);
        await queryRunner.query(`DROP TABLE "ban"`, undefined);
        await queryRunner.query(`DROP TABLE "tracked_account"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "notification"`, undefined);
        await queryRunner.query(`DROP TABLE "user_settings"`, undefined);
        await queryRunner.query(`DROP TABLE "match"`, undefined);
    }

}
