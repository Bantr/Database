import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import TrackedAccount from './trackedAccount.entity';
import { BanType } from '../types/BanType.enum';
import { BanPlatform } from '../types/BanPlatform.enum';

/**
 * Database representation of a ban
 */
@Entity()
export default class Ban extends BaseEntity {
    /**
     * Primary key
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * When was the ban detected
     */
    @Column()
    detectedAt: Date;

    /**
     * Did the ban exist before the system started tracking the account?
     */
    @Column()
    preExisting: boolean;

    /**
     * Type of ban
     * VAC, game, economy, faceit, ...
     */
    @Column()
    type: BanType;

    @Column({ default: false })
    unbanned: boolean;

    @Column({ nullable: true })
    unbannedAt: Date;

    /**
     * Link bans to trackedAccount
     */
    @ManyToOne(type => TrackedAccount, trackedAccount => trackedAccount.bans)
    trackedAccount: TrackedAccount;
}
