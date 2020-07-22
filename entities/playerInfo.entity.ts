import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  cashSpentThisRound: number;

  @Column()
  hasC4: boolean;

  @Column()
  health: number;

  @Column()
  armour: number;

  @Column()
  isScoped: boolean;

  // TODO: Should this be an enum/join table?
  @Column()
  weapon: string;

  @Column()
  bulletsInMagazine: number;

  @OneToOne(() => Position)
  position: Position;

  @ManyToOne(() => Player)
  player: Player;
}
