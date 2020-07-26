import { Ban } from './ban.entity';
import { BombStatus } from './bombStatus.entity';
import { Kill } from './kill.entity';
import { Match } from './match.entity';
import { Notification } from './notification.entity';
import { Player } from './player.entity';
import { PlayerBlind } from './playerBlind.entity';
import { PlayerHurt } from './playerHurt.entity';
import { PlayerInfo } from './playerInfo.entity';
import { PlayerJump } from './playerJump.entity';
import { Position } from './position.entity';
import { Round } from './round.entity';
import { Team } from './team.entity';
import { UserSettings } from './user-settings.entity';
import { User } from './user.entity';
import { UtilityActivated } from './utilityActivated.entity';
import { UtilityThrown } from './utilityThrown.entity';
import { WeaponStatus } from './weaponStatus.entity';

export { BombStatus } from "./bombStatus.entity";
export { Kill } from "./kill.entity";
export { PlayerBlind } from "./playerBlind.entity";
export { PlayerHurt } from "./playerHurt.entity";
export { PlayerInfo } from "./playerInfo.entity";
export { PlayerJump } from "./playerJump.entity";
export { Position } from "./position.entity";
export { Round } from "./round.entity";
export { Team } from "./team.entity";
export { UtilityActivated } from "./utilityActivated.entity";
export { UtilityThrown } from "./utilityThrown.entity";
export { WeaponStatus } from "./weaponStatus.entity";

export { Ban } from "./ban.entity";
export { Match } from "./match.entity";
export { Notification } from "./notification.entity";
export { Player } from "./player.entity";
export { UserSettings } from "./user-settings.entity";
export { User } from "./user.entity";

export const entities = [
  Ban,
  Match,
  Notification,
  Player,
  Round,
  Team,
  User,
  UserSettings,
  BombStatus,
  Kill,
  PlayerBlind,
  PlayerHurt,
  PlayerInfo,
  PlayerJump,
  Position,
  UtilityActivated,
  UtilityThrown,
  WeaponStatus
];
