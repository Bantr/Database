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

import { Weapon } from '../types/Weapon.enum';
import { WeaponStatusChange } from '../types/WeaponStatusChange.enum';
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

  @Column({
    type: "enum",
    enum: Object.values(Weapon)
  })
  weapon: Weapon;

  @Column()
  type: WeaponStatusChange;

  @OneToOne(() => PlayerInfo)
  @JoinColumn()
  player: PlayerInfo;

  @ManyToOne(() => Round)
  round: Round;
}
