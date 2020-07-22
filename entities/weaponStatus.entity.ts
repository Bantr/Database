import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WeaponStatusChange } from 'types/WeaponStatusChange.enum';

import { PlayerInfo } from './playerInfo.entity';
import { Round } from './round.entity';

/**
 * Database record
 */
@Entity()
export class WeaponStatus extends BaseEntity {
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
  type: WeaponStatusChange;

  @OneToOne(() => PlayerInfo)
  player: PlayerInfo;

  @ManyToOne(() => Round)
  round: Round;
}
