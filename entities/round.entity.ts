import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { RoundEndReason } from '../types/RoundWinReason.enum';
import { BombStatus } from './bombStatus.entity';
import { Kill } from './kill.entity';
import { Match } from './match.entity';
import { PlayerBlind } from './playerBlind.entity';
import { PlayerHurt } from './playerHurt.entity';
import { PlayerJump } from './playerJump.entity';
import { Team } from './team.entity';
import { UtilityActivated } from './utilityActivated.entity';
import { UtilityThrown } from './utilityThrown.entity';
import { WeaponStatus } from './weaponStatus.entity';

/**
 * Database record
 */
@Entity()
export class Round extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  startTick: number;

  @Column()
  endTick: number;

  @Column()
  officialEndTick: number;

  @Column({
    type: "enum",
    enum: Object.values(RoundEndReason)
  })
  endReason: RoundEndReason;

  @ManyToOne(() => Match, (match) => match.rounds)
  match: Match;

  @ManyToOne(() => Team, (team) => team.roundsWon)
  winningTeam: Team;

  @OneToMany(() => BombStatus, (bombStatus) => bombStatus.round)
  bombStatusChanges: BombStatus[] = [];

  @OneToMany(() => Kill, (_) => _.round)
  kills: Kill[] = [];

  @OneToMany(() => PlayerBlind, (_) => _.round)
  playerBlinds: PlayerBlind[] = [];

  @OneToMany(() => PlayerHurt, (_) => _.round)
  playerHurts: PlayerHurt[] = [];

  @OneToMany(() => PlayerJump, (_) => _.round)
  playerJumps: PlayerJump[] = [];

  @OneToMany(() => UtilityActivated, (_) => _.round)
  utilityActivateds: UtilityActivated[] = [];

  @OneToMany(() => UtilityThrown, (_) => _.round)
  utilityThrowns: UtilityThrown[] = [];

  @OneToMany(() => WeaponStatus, (_) => _.round)
  weaponStatuses: WeaponStatus[] = [];
}
