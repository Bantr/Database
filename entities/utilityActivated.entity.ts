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

import { UtilityType } from '../types/utilityType.enum';
import { Position } from './position.entity';
import { Round } from './round.entity';

/**
 * Database record
 */
@Entity()
export class UtilityActivated extends BaseEntity {
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
    enum: Object.values(UtilityType)
  })
  type: UtilityType;

  /**
   * ID of the ingame entity
   */
  @Column()
  entityId: number;

  @OneToOne(() => Position)
  @JoinColumn()
  position: Position;

  @ManyToOne(() => Round)
  round: Round;
}
