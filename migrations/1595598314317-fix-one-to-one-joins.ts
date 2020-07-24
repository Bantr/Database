import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixOneToOneJoins1595598314317 implements MigrationInterface {
  name = "fixOneToOneJoins1595598314317";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "player_info" ADD "positionId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" ADD CONSTRAINT "UQ_2f379f4936298abb4337fcf3bd4" UNIQUE ("positionId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" ADD "playerId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" ADD CONSTRAINT "UQ_5198178354128c0f245f0001b56" UNIQUE ("playerId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" ADD "positionId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" ADD CONSTRAINT "UQ_3f7258564029924db971c82df2f" UNIQUE ("positionId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD "attackerId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD CONSTRAINT "UQ_66bae58484e73e6eed83806204f" UNIQUE ("attackerId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD "victimId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD CONSTRAINT "UQ_8b237366204443c950e6ad7040d" UNIQUE ("victimId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD "assisterId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD CONSTRAINT "UQ_9e959653091685dbdba8dc5be34" UNIQUE ("assisterId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" ADD "attackerId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" ADD CONSTRAINT "UQ_6cf645028c4e85c13f397f5cbc4" UNIQUE ("attackerId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" ADD "victimId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" ADD CONSTRAINT "UQ_f38ac2d3a1491a03c11b6b03e82" UNIQUE ("victimId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" ADD "attackerId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" ADD CONSTRAINT "UQ_11325a767513055480b7f0576e9" UNIQUE ("attackerId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" ADD "victimId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" ADD CONSTRAINT "UQ_c827f7e140f620740d30a1abfa8" UNIQUE ("victimId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_jump" ADD "playerId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_jump" ADD CONSTRAINT "UQ_05717296fd699479e773327f37f" UNIQUE ("playerId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_activated" ADD "positionId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_activated" ADD CONSTRAINT "UQ_97e57c666e734d24763c2e6f1ed" UNIQUE ("positionId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" ADD "playerId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" ADD CONSTRAINT "UQ_18fc7c134dd8b26207487732153" UNIQUE ("playerId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" ADD "positionId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" ADD CONSTRAINT "UQ_9e6abb1c691794d1e4c14624998" UNIQUE ("positionId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" ADD "playerId" integer`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" ADD CONSTRAINT "UQ_24f67795602b4bbf7be1191fc04" UNIQUE ("playerId")`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" ADD CONSTRAINT "FK_2f379f4936298abb4337fcf3bd4" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" ADD CONSTRAINT "FK_5198178354128c0f245f0001b56" FOREIGN KEY ("playerId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" ADD CONSTRAINT "FK_3f7258564029924db971c82df2f" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD CONSTRAINT "FK_66bae58484e73e6eed83806204f" FOREIGN KEY ("attackerId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD CONSTRAINT "FK_8b237366204443c950e6ad7040d" FOREIGN KEY ("victimId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" ADD CONSTRAINT "FK_9e959653091685dbdba8dc5be34" FOREIGN KEY ("assisterId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" ADD CONSTRAINT "FK_6cf645028c4e85c13f397f5cbc4" FOREIGN KEY ("attackerId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" ADD CONSTRAINT "FK_f38ac2d3a1491a03c11b6b03e82" FOREIGN KEY ("victimId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" ADD CONSTRAINT "FK_11325a767513055480b7f0576e9" FOREIGN KEY ("attackerId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" ADD CONSTRAINT "FK_c827f7e140f620740d30a1abfa8" FOREIGN KEY ("victimId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_jump" ADD CONSTRAINT "FK_05717296fd699479e773327f37f" FOREIGN KEY ("playerId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_activated" ADD CONSTRAINT "FK_97e57c666e734d24763c2e6f1ed" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" ADD CONSTRAINT "FK_18fc7c134dd8b26207487732153" FOREIGN KEY ("playerId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" ADD CONSTRAINT "FK_9e6abb1c691794d1e4c14624998" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" ADD CONSTRAINT "FK_24f67795602b4bbf7be1191fc04" FOREIGN KEY ("playerId") REFERENCES "player_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "weapon_status" DROP CONSTRAINT "FK_24f67795602b4bbf7be1191fc04"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" DROP CONSTRAINT "FK_9e6abb1c691794d1e4c14624998"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" DROP CONSTRAINT "FK_18fc7c134dd8b26207487732153"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_activated" DROP CONSTRAINT "FK_97e57c666e734d24763c2e6f1ed"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_jump" DROP CONSTRAINT "FK_05717296fd699479e773327f37f"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" DROP CONSTRAINT "FK_c827f7e140f620740d30a1abfa8"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" DROP CONSTRAINT "FK_11325a767513055480b7f0576e9"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" DROP CONSTRAINT "FK_f38ac2d3a1491a03c11b6b03e82"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" DROP CONSTRAINT "FK_6cf645028c4e85c13f397f5cbc4"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP CONSTRAINT "FK_9e959653091685dbdba8dc5be34"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP CONSTRAINT "FK_8b237366204443c950e6ad7040d"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP CONSTRAINT "FK_66bae58484e73e6eed83806204f"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" DROP CONSTRAINT "FK_3f7258564029924db971c82df2f"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" DROP CONSTRAINT "FK_5198178354128c0f245f0001b56"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" DROP CONSTRAINT "FK_2f379f4936298abb4337fcf3bd4"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" DROP CONSTRAINT "UQ_24f67795602b4bbf7be1191fc04"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "weapon_status" DROP COLUMN "playerId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" DROP CONSTRAINT "UQ_9e6abb1c691794d1e4c14624998"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" DROP COLUMN "positionId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" DROP CONSTRAINT "UQ_18fc7c134dd8b26207487732153"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_thrown" DROP COLUMN "playerId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_activated" DROP CONSTRAINT "UQ_97e57c666e734d24763c2e6f1ed"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "utility_activated" DROP COLUMN "positionId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_jump" DROP CONSTRAINT "UQ_05717296fd699479e773327f37f"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_jump" DROP COLUMN "playerId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" DROP CONSTRAINT "UQ_c827f7e140f620740d30a1abfa8"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" DROP COLUMN "victimId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" DROP CONSTRAINT "UQ_11325a767513055480b7f0576e9"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_hurt" DROP COLUMN "attackerId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" DROP CONSTRAINT "UQ_f38ac2d3a1491a03c11b6b03e82"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" DROP COLUMN "victimId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" DROP CONSTRAINT "UQ_6cf645028c4e85c13f397f5cbc4"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_blind" DROP COLUMN "attackerId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP CONSTRAINT "UQ_9e959653091685dbdba8dc5be34"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP COLUMN "assisterId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP CONSTRAINT "UQ_8b237366204443c950e6ad7040d"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP COLUMN "victimId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP CONSTRAINT "UQ_66bae58484e73e6eed83806204f"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "kill" DROP COLUMN "attackerId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" DROP CONSTRAINT "UQ_3f7258564029924db971c82df2f"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" DROP COLUMN "positionId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" DROP CONSTRAINT "UQ_5198178354128c0f245f0001b56"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "bomb_status" DROP COLUMN "playerId"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" DROP CONSTRAINT "UQ_2f379f4936298abb4337fcf3bd4"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "player_info" DROP COLUMN "positionId"`,
      undefined
    );
  }
}
