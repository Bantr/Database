import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Ban } from './ban.entity';
import { User } from './user.entity';

/**
 * Database entity
 */
@Entity()
export class Notification extends BaseEntity {
    /**
     * Primary key
     */
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'createdAt', type: 'date' })
    createdAt: Date;

    @Column('boolean', { default: false })
    seen: boolean;

    @Column('boolean', { default: false })
    deleted: boolean;

    @ManyToOne(() => Ban)
    @JoinTable()
    ban: Ban;

    @ManyToOne(() => User, user => user.notifications)
    user: User;
}
