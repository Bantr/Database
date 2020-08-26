import { BaseEntity, Check, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user.entity';

/**
 * Database entity
 */
@Entity()
export class UserSettings extends BaseEntity {
  /**
   * Primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column("boolean", { default: true, nullable: false })
  notificationDiscordEnabled: boolean;

  @Column("boolean", { default: true, nullable: false })
  notificationVACEnabled: boolean;

  @Column("boolean", { default: true, nullable: false })
  notificationGameEnabled: boolean;

  @Column("boolean", { default: false, nullable: false })
  notificationCommunityEnabled: boolean;

  @Column("boolean", { default: false, nullable: false })
  notificationEconomyEnabled: boolean;

  @Column("boolean", { default: true, nullable: false })
  notificationFaceitEnabled: boolean;

  @Column("boolean", { default: false, nullable: false })
  matchmakingAuthFailed: boolean;

  /**
   * The sharing code of the last match a user played
   */
  @Column("text", { nullable: true })
  @Check(
    `"lastKnownMatch" SIMILAR TO 'CSGO-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}'`
  )
  lastKnownMatch: string;

  /**
   * Authorization code to get new MM matches
   * @see https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive_Access_Match_History
   */
  @Check(
    `"matchAuthCode" SIMILAR TO '[A-Za-z0-9]{4}-[A-Za-z0-9]{5}-[A-Za-z0-9]{4}'`
  )
  @Column("text", { nullable: true })
  matchAuthCode: string;

  @OneToOne(() => User, (user) => user.settings)
  userId: User;

  @Column("jsonb", { nullable: true })
  layoutSettings: Record<string, unknown>;
}
