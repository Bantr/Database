export enum RoundEndReason {
  // Target Successfully Bombed
  TargetBombed = 1,
  // The VIP has escaped.
  VIPEscaped,
  // VIP has been assassinated
  VIPKilled,
  // The terrorists have escaped
  TerroristsEscaped,
  // The CTs have prevented most of the terrorists from escaping
  CTStoppedEscape,
  // Escaping terrorists have all been neutralized
  TerroristsStopped,
  // The bomb has been defused
  BombDefused,
  // Counter-Terrorists Win
  CTWin,
  // Terrorists Win
  TerroristWin,
  // Round Draw
  Draw,
  // All Hostages have been rescued
  HostagesRescued,
  // Target has been saved
  TargetSaved,
  // Hostages have not been rescued
  HostagesNotRescued,
  // Terrorists have not escaped
  TerroristsNotEscaped,
  // VIP has not escaped
  VIPNotEscaped,
  // Game Commencing
  GameStart,
  // Terrorists Surrender
  TerroristsSurrender,
  // CTs Surrender
  CTSurrender,
}
