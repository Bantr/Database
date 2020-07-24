import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { PlayerInfo } from './playerInfo.entity';
import { Round } from './round.entity';

/**
 * Database record
 */
@Entity()
export class PlayerBlind extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  tick: number;

  /**
   * How long a player was blinded, in ticks
   */
  @Column()
  duration: number;

  @OneToOne(() => PlayerInfo)
  @JoinColumn()
  attacker: PlayerInfo;

  @OneToOne(() => PlayerInfo)
  @JoinColumn()
  victim: PlayerInfo;

  @ManyToOne(() => Round)
  round: Round;
}
