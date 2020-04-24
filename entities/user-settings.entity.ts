import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import User from './user.entity';

/**
 * Database entity
 */
@Entity()
export default class UserSettings extends BaseEntity {
    /**
     * Primary key
     */
    @PrimaryGeneratedColumn()
    id: number;

    @Column('boolean', { default: true, nullable: false })
    notificationDiscordEnabled: boolean

    @Column('boolean', { default: true, nullable: false })
    notificationVACEnabled: boolean

    @Column('boolean', { default: true, nullable: false })
    notificationGameEnabled: boolean

    @Column('boolean', { default: false, nullable: false })
    notificationCommunityEnabled: boolean

    @Column('boolean', { default: false, nullable: false })
    notificationEconomyEnabled: boolean

    @Column('boolean', { default: true, nullable: false })
    notificationFaceitEnabled: boolean

    @OneToOne(type => User, user => user.settings)
    userId: User
}
