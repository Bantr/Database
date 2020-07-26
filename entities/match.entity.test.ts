import { Match } from './match.entity';
import { Round } from './round.entity';
import { Team } from './team.entity';

describe("Match entity", () => {
  // Seems like a stupid test.. and it is
  // But this way 'loads' entities and typechecks some stuff which might otherwise go unnoticed
  it("Has an array of teams", () => {
    const match = new Match();
    match.teams = [];
    match.teams.push(new Team());
    expect(match.teams).toBeInstanceOf(Array);
  });

  it("Has an array of rounds", () => {
    const match = new Match();
    match.rounds = [];
    match.rounds.push(new Round());

    expect(match.rounds).toBeInstanceOf(Array);
  });
});
