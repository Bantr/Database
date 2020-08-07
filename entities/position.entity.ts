import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Database record
 */
@Entity()
export class Position extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: "real" })
  x: string;

  @Column({ type: "real" })
  y: string;

  @Column({ type: "real" })
  z: string;
}
