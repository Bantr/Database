import { lastKnownMatch, matchAuthCode } from './regex';

describe("Regex", () => {
  it("Should match the matchAuthCode regex", () => {
    expect("7BV9-BD9HN-5RDB").toMatch(matchAuthCode);
    expect("7BD9-BD9_N-5RDB").not.toMatch(matchAuthCode);
    expect("CSGO-4da8s-D9aE5-KFAP7-tLzdR-rvMpP").not.toMatch(matchAuthCode);
  });

  it("Should match the lastKnownMatch regex", () => {
    expect("CSGO-4da8s-D9aE5-KFAP7-tLzdR-rvMpP").toMatch(lastKnownMatch);
    expect("7BV9-BD9HN-5RDB").not.toMatch(lastKnownMatch);
    expect("CSGO-4da8s-D9aE5-KFAP7-tLzdR-rvMpP-aPpEL").not.toMatch(lastKnownMatch);
  });
});
