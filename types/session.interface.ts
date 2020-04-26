import ISteamProfile from './steamProfile.interface';

export interface ISession {
    id: string;
    username: string;
    steamId: string;
    faceitId: string;
    discordId: string;
    apiKey: string;
    steamProfile: ISteamProfile;
}
