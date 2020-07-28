
/** @constant
 * Regexp to verify a user's most recently completed match token.
*/
export const matchAuthCode = /[A-Za-z0-9]{4}-[A-Za-z0-9]{5}-[A-Za-z0-9]{4}$/

/** @constant
 * Regexp to verify a user's steam authentication code. Used to gain access to a user's metrics.
*/
export const lastKnownMatch = /CSGO-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}$/;

export const REGEX = {
  lastKnownMatch,
  matchAuthCode
}