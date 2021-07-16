const HERO_LIST_URL = 'https://hahow-recruit.herokuapp.com/heroes';
const HERO_PROFILE_URL_OF_ID = (id) =>
  `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`;

function getHeroList() {
  return fetch(HERO_LIST_URL).then((data) => data.json());
}

function getHeroProfile(id) {
  return fetch(HERO_PROFILE_URL_OF_ID(id)).then((data) => data.json());
}

function patchHeroProfile(id, profile) {
  return fetch(HERO_PROFILE_URL_OF_ID(id), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  }).then((data) => console.log(data));
}

export { getHeroList, getHeroProfile, patchHeroProfile };
