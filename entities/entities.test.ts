import dotenv = require('dotenv');
import * as faker from 'faker';
import { Connection, createConnection } from 'typeorm';

import { entities, Match, Team } from '../entities';
import { RoundEndReason } from '../types/RoundWinReason.enum';
import { Round } from './round.entity';

dotenv.config();

let connection: Connection;
let match: Match;

describe("Entities", () => {
  beforeAll(async () => {
    connection = await createConnection({
      type: "postgres",
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT, 10),
      username: process.env.PG_USER,
      password: process.env.PG_PW,
      database: process.env.PG_DB,
      entities: entities,
      synchronize: false
      //logging: true
    });
  });

  afterAll(() => {
    connection.close();
  });

  beforeEach(async () => {
    match = new Match();
    match.teams = [];
    match.teams.push(new Team());

    match.date = faker.date.past(1);
    match.externalId = faker.random.uuid();

    await match.save();

    match = await Match.findOne({
      where: { id: match.id },
      relations: ["teams", "rounds", "players"]
    });
  });

  // Seems like a stupid test.. and it is
  // But this way 'loads' entities and typechecks some stuff which might otherwise go unnoticed
  it("Match has an array several things", async () => {
    console.log(match);

    expect(match.teams).toBeInstanceOf(Array);
    expect(match.rounds).toBeInstanceOf(Array);
    expect(match.players).toBeInstanceOf(Array);
  });

  it("Round has arrays of a lot of stuff", async () => {
    const roundData = new Round();
    roundData.startTick = 1;
    roundData.endTick = 1337;
    roundData.officialEndTick = 420;
    roundData.endReason = RoundEndReason.BombDefused;
    await roundData.save();

    const round = await Round.findOne({
      where: { id: roundData.id },
      relations: [
        "bombStatusChanges",
        "weaponStatuses",
        "utilityThrowns",
        "utilityActivateds",
        "playerJumps",
        "kills",
        "playerBlinds",
        "playerHurts"
      ]
    });

    console.log(round);

    expect(round.bombStatusChanges).toBeInstanceOf(Array);
    expect(round.kills).toBeInstanceOf(Array);

    expect(round.playerBlinds).toBeInstanceOf(Array);
    expect(round.playerHurts).toBeInstanceOf(Array);
    expect(round.playerJumps).toBeInstanceOf(Array);
    expect(round.utilityActivateds).toBeInstanceOf(Array);
    expect(round.utilityThrowns).toBeInstanceOf(Array);
    expect(round.weaponStatuses).toBeInstanceOf(Array);
  });
});
