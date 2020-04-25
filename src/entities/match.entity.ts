import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, Unique } from 'typeorm';
import { TrackedAccount } from './trackedAccount.entity';
import { IMatchType } from '../types/matchType.interface';

/**
 * Match database record
 */
@Entity()
@Unique(['externalId'])
export class Match extends BaseEntity {
    /**
     * Primary key
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * Date when the Match was played
     */
    @Column()
    date: Date;
    /**
     * Type of Match
     * Faceit CSGO, Matchmaking, ...
     */
    @Column()
    type: IMatchType;

    /**
     * ID of the match, gotten from the external service it was played on
     * Faceit match ID (ex: 1-6105a0dc-0e73-4033-8941-1a28c75470d8)
     * Or MM match ID (ex: TODO)
     */
    @Column()
    externalId: string;

    /**
     * TrackedAccounts that played in this Match
     */
    @ManyToMany(() => TrackedAccount, trackedAccount => trackedAccount.matches)
    @JoinTable()
    players: TrackedAccount[];
}
