import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoundWinReason } from 'types/RoundWinReason.enum';

import { Match } from './match.entity';
import { Team } from './team.entity';

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
  winReason: RoundWinReason;

  @ManyToOne(() => Match, (match) => match.rounds)
  match: Match;

  @OneToMany(() => Team, (team) => team.roundsWon)
  winningTeam: Team;
}
