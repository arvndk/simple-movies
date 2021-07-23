import axios from "";

const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

const fetchGames = () => {
  return {
    type: "FETCH_GAMES",
  };
};

export default gamesReducer;
