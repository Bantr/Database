import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
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

  @ManyToMany(() => Player)
  @JoinTable()
  players: Player[];

  @ManyToMany(() => Match)
  @JoinTable()
  matches: Match[];

  @ManyToOne(() => Round)
  roundsWon: Round[];
}
