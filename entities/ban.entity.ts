import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { IBanType } from '../types/BanType.enum';
import { Player } from './player.entity';

/**
 * Database representation of a ban
 */
@Entity()
export class Ban extends BaseEntity {
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
    @Column({
        type: "enum",
        enum: Object.values(IBanType)
    })
    type: IBanType;

    @Column({ default: false })
    unbanned: boolean;

    @Column({ nullable: true })
    unbannedAt: Date;

    /**
     * Link bans to player
     */
    @ManyToOne(() => Player, player => player.bans)
    player: Player;
}
