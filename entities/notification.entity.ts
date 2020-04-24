import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, CreateDateColumn, JoinTable, ManyToOne } from 'typeorm';
import Ban from './ban.entity';
import User from './user.entity';

/**
 * Database entity
 */
@Entity()
export default class Notification extends BaseEntity {
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

    @ManyToMany(() => Ban)
    @JoinTable()
    bans: Ban[];

    @ManyToOne(() => User, user => user.notifications)
    user: User;
}
