import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  troughSmoke: boolean;

  @Column()
  whileBlind: boolean;

  @Column()
  throughWall: boolean;

  @OneToOne(() => PlayerInfo)
  attacker: PlayerInfo;

  @OneToOne(() => PlayerInfo)
  victim: PlayerInfo;

  @OneToOne(() => PlayerInfo, { nullable: true })
  assister: PlayerInfo;

  @ManyToOne(() => Round)
  round: Round;
}
