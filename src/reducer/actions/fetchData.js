import APIKEY from "../../apikey";
import { fetchDataLoading, fetchDataSuccess, fetchDataError } from "../reducer";

export const fetchData = (
  state,
  initialSearch,
  page,
  typeSearch
) => dispatch => {
  const url = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${state.dataSearch}&page=${page}&type=${typeSearch}`;

  dispatch(fetchDataLoading());

  fetch(url)
    .then(data => data.json())
    .then(json => {
      const data = json;
      dispatch(fetchDataSuccess(data, initialSearch, page, typeSearch));
    })
    .catch(error => {
      dispatch(fetchDataError());
    });
};

export default fetchData;
