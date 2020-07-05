import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Match } from './match.entity';
import { Notification } from './notification.entity';
import { Player } from './player.entity';
import { UserSettings } from './user-settings.entity';

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
  @Column("text", { unique: true })
  steamId: string;

  /**
   * Discord identifier
   */
  @Column("text", { nullable: true })
  discordId: string;

  /**
   * Faceit identifier
   */
  @Column("text", { nullable: true })
  faceitId: string;

  /**
   * Username on Faceit
   */
  @Column("text", { nullable: true })
  faceitName: string;

  @Column("text", { default: "user" })
  role: string;

  /**
   * The sharing code of the last match a user played
   */
  @Column("text", { nullable: true })
  lastKnownMatch: string;

  /**
   * Authorization code to get new MM matches
   * @see https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive_Access_Match_History
   */
  @Column("text", { nullable: true })
  matchAuthCode: string;

  /**
   * User tracks these accounts
   */
  @ManyToMany(() => Player, (player) => player.trackedBy)
  tracks: Player[];

  @OneToOne(() => UserSettings, { cascade: true, eager: true })
  @JoinColumn()
  settings: UserSettings;

  @ManyToMany(() => Player, (player) => player.followedBy)
  follows: Player[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  /**
   * Matches the user has played in
   */
  @ManyToMany(() => Match)
  playedInMatch: Match[];
}
