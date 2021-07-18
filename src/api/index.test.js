const { getHeroList, getHeroProfile, patchHeroProfile } = require('./index.js');

describe('getHeroList test', () => {
  it('should give array', async () => {
    const heroes = await getHeroList();
    expect(Array.isArray(heroes)).toBe(true);
  });
  it('should have heroes data of four', async () => {
    const heroes = await getHeroList();
    expect(heroes.length).toBe(4);
  });
});

describe('getHeroProfile test', () => {
  it('should return object of heroes profile', async () => {
    const hero_1_Profile = await getHeroProfile(1);
    expect(hero_1_Profile).toHaveProperty('str');
    expect(hero_1_Profile).toHaveProperty('int');
    expect(hero_1_Profile).toHaveProperty('agi');
    expect(hero_1_Profile).toHaveProperty('luk');
  });
});

describe('patchHeroProfile test', () => {
  it('should return false if patching with wrong amount of skill points sum', async () => {
    const patchResult = await patchHeroProfile(1, {
      str: 1,
      luk: 1,
      agi: 1,
      int: 1,
    });
    expect(patchResult).toBe(false);
  });
  it('should return true is patching with same amount of skill points sum', async () => {
    const hero_1_Profile = await getHeroProfile(1);
    const patchResult = await patchHeroProfile(1, hero_1_Profile);
    expect(patchResult).toBe(true);
  });
});
