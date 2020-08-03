import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Match } from './match.entity';
import { Player } from './player.entity';
import { Round } from './round.entity';

/**
 * Database record
 */
@Entity()
export class Team extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  name: string;

  @ManyToMany(() => Player, (player) => player.teams)
  @JoinTable()
  players: Player[];

  @ManyToMany(() => Match, (match) => match.teams)
  @JoinTable()
  matches: Match[];

  @OneToMany(() => Round, (round) => round.winningTeam)
  roundsWon: Round[];
}
