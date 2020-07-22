import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { PlayerInfo } from './playerInfo.entity';
import { Round } from './round.entity';

/**
 * Database record
 */
@Entity()
export class PlayerJump extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  tick: number;

  @OneToOne(() => PlayerInfo)
  player: PlayerInfo;

  @ManyToOne(() => Round)
  round: Round;
}
