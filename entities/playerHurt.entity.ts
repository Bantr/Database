import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HurtSources } from 'types/HurtSources.enum';

import { PlayerInfo } from './playerInfo.entity';
import { Round } from './round.entity';

/**
 * Database record
 */
@Entity()
export class PlayerHurt extends BaseEntity {
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
  damageArmour: number;

  @Column()
  damageHealth: number;

  // TODO: Should be an enum but cba checking what values are possible right now :)
  @Column()
  hitGroup: number;

  @Column()
  source: HurtSources;

  @OneToOne(() => PlayerInfo)
  attacker: PlayerInfo;

  @OneToOne(() => PlayerInfo)
  victim: PlayerInfo;

  @ManyToOne(() => Round)
  round: Round;
}
