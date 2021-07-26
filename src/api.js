const api_key = `${process.env.REACT_APP_MOVIES_API}`;
const base_url = `https://api.rawg.io/api/`;

const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () =>
  `${base_url}${popular_games}&key=${api_key}`;
export const upcomingGamesURL = () =>
  `${base_url}${upcoming_games}&key=${api_key}`;
export const newGamesURL = () => `${base_url}${new_games}&key=${api_key}`;
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}&key=${api_key}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots&key=${api_key}`;
