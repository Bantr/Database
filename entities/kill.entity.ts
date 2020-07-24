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
export class Kill extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  tick: number;

  @Column()
  throughSmoke: boolean;

  @Column()
  whileBlind: boolean;

  @Column()
  throughWall: boolean;

  @OneToOne(() => PlayerInfo)
  @JoinColumn()
  attacker: PlayerInfo;

  @OneToOne(() => PlayerInfo)
  @JoinColumn()
  victim: PlayerInfo;

  @OneToOne(() => PlayerInfo, { nullable: true })
  @JoinColumn()
  assister: PlayerInfo;

  @ManyToOne(() => Round)
  round: Round;
}
