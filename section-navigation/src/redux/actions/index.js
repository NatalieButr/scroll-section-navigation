import axios from 'axios';


// get
export const getCharacters = () => dispatch => {
  axios('http://hp-api.herokuapp.com/api/characters/students')
    .then(({ data }) => dispatch(getCharactersSuccess(data)))
    .catch(error => dispatch(getCharactersError(error)));
}

const getCharactersSuccess  = characters  => ({ type: "GET_CHARACTERS_SUCCESS", payload: characters });
const getCharactersError    = error => ({ type: "GET_CHARACTERS_ERROR", payload: error });