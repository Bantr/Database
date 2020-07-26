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

import { BombStatusChange } from '../types/BombStatusChange.enum';
import { PlayerInfo } from './playerInfo.entity';
import { Position } from './position.entity';
import { Round } from './round.entity';

/**
 * Database record
 */
@Entity()
export class BombStatus extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  tick: number;

  @Column({
    type: "enum",
    enum: Object.values(BombStatusChange)
  })
  type: BombStatusChange;

  @OneToOne(() => PlayerInfo)
  @JoinColumn()
  player: PlayerInfo;

  @OneToOne(() => Position)
  @JoinColumn()
  position: Position;

  @ManyToOne(() => Round)
  round: Round;
}
