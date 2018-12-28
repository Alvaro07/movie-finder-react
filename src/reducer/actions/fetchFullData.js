import APIKEY from "../../apikey";
import {
  fetchDataLoading,
  fetchDataFullSuccess,
  fetchDataError
} from "../reducer";

export const fetchFullData = id => dispatch => {
  const url = `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`;

  dispatch(fetchDataLoading());

  fetch(url)
    .then(data => data.json())
    .then(json => {
      const data = json;
      dispatch(fetchDataFullSuccess(data));
    })
    .catch(error => {
      dispatch(fetchDataError());
    });
};

export default fetchFullData;
