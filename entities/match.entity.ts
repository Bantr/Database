import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { IMatchType } from '../types/matchType.interface';
import { Player } from './player.entity';
import { Round } from './round.entity';

/**
 * Match database record
 */
@Entity()
@Unique(["externalId"])
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
  @Column({ nullable: true })
  type: IMatchType;

  /**
   * More detailed info about a match type
   * Useful for matches played in (private) Faceit hubs for example
   */
  @Column({ nullable: true })
  typeExtended: string;

  /**
   * URL to download the demo file
   */
  @Column()
  demoUrl: string;

  /**
   * ID of the match, gotten from the external service it was played on
   * Faceit match ID (ex: 1-6105a0dc-0e73-4033-8941-1a28c75470d8)
   * Or MM match ID (ex: TODO)
   */
  @Column()
  externalId: string;

  @Column({ nullable: true })
  map: string;

  @Column({ nullable: true })
  tickrate: number;

  @Column({ nullable: true })
  durationTicks: number;

  /**
   * players that played in this Match
   */
  @ManyToMany(() => Player, (player) => player.matches)
  @JoinTable()
  players: Player[];

  @OneToMany(() => Round, (round) => round.match)
  rounds: Round[];
}
