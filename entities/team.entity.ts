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

import { TeamType } from '../types/TeamType.enum';
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

  /**
   * Uniquely identifies this team inside a demo
   * Used for internal parsing of demo
   * Not useful outside.. I think?
   */
  @Column()
  handle: number;

  @Column({
    type: "enum",
    enum: Object.values(TeamType)
  })
  startingSide: TeamType;

  @ManyToMany(() => Player, (player) => player.teams)
  @JoinTable()
  players: Player[];

  @ManyToMany(() => Match, (match) => match.teams)
  @JoinTable()
  matches: Match[];

  @OneToMany(() => Round, (round) => round.winningTeam)
  roundsWon: Round[];
}
