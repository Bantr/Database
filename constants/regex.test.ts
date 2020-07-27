import { lastKnownMatch, matchAuthCode } from './regex';

describe("Regex", () => {
  it("matchAuthCode", () => {
    expect("7BV9-BD9HN-5RDB").toMatch(matchAuthCode);
    expect("CSGO-4da8s-D9aE5-KFAP7-tLzdR-rvMpP").not.toMatch(matchAuthCode);
  });

  it("lastKnownMatch", () => {
    expect("CSGO-4da8s-D9aE5-KFAP7-tLzdR-rvMpP").toMatch(lastKnownMatch);
    expect("7BV9-BD9HN-5RDB").not.toMatch(lastKnownMatch);
  });
});
