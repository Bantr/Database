import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user.entity';

/**
 * Database entity
 */
@Entity()
export class CustomTheme extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "createdAt", type: "date" })
  createdAt: Date;

  @Column()
  name: string;

  @Column("jsonb")
  config: Record<string, unknown>;

  @ManyToOne(() => User, (user) => user.themes)
  user: User;
}
