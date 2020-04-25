import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Match } from './match.entity';
import { TrackedAccount } from './trackedAccount.entity';
import { UserSettings } from './user-settings.entity';
import { Notification } from './notification.entity';

/**
 * Database entity
 */
@Entity()
export class User extends BaseEntity {
    /**
     * Primary key
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * Username
     */
    @Column()
    username: string;

    /**
     * Steam identifier
     */
    @Column('text', { unique: true })
    steamId: string;

    /**
     * Discord identifier
     */
    @Column('text', { nullable: true })
    discordId: string;

    /**
     * Faceit identifier
     */
    @Column('text', { nullable: true })
    faceitId: string;

    /**
     * Username on Faceit
     */
    @Column('text', { nullable: true })
    faceitName: string;

    @Column('text', { default: 'user' })
    role: string;

    /**
     * User tracks these accounts
     */
    @ManyToMany(() => TrackedAccount, trackedAccount => trackedAccount.trackedBy)
    tracks: TrackedAccount[];

    @OneToOne(() => UserSettings, { cascade: true, eager: true })
    @JoinColumn()
    settings: UserSettings

    @ManyToMany(() => TrackedAccount, trackedAccount => trackedAccount.followedBy)
    follows: TrackedAccount[];

    @OneToMany(() => Notification, notification => notification.user)
    notifications: Notification[];

    /**
     * Matches the user has played in
     */
    @ManyToMany(() => Match)
    playedInMatch: Match[];

}
