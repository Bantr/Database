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
import { Player } from './player.entity';
import { Position } from './position.entity';

/**
 * Database record
 */
@Entity()
export class PlayerInfo extends BaseEntity {
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
  equipmentValue: number;

  @Column()
  freezeTimeEndEquipmentValue: number;

  @Column()
  cashSpentInRound: number;

  @Column()
  hasC4: boolean;

  @Column()
  health: number;

  @Column()
  armour: number;

  @Column()
  isScoped: boolean;

  @Column({
    type: "enum",
    enum: Object.values(Weapon),
    nullable: true
  })
  weapon: Weapon;

  @Column()
  bulletsInMagazine: number;

  @OneToOne(() => Position)
  @JoinColumn()
  position: Position;

  @ManyToOne(() => Player)
  player: Player;
}
