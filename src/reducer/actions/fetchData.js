import APIKEY from '../../apikey';
import { fetchTempLoading, fetchTempSuccess, fetchTempError } from '../reducer';

export const fetchData = (state, moreResults, page, typeSearch) => dispatch => {

    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${state.dataSearch}&page=${page}&type=${typeSearch}` 

    dispatch(fetchTempLoading());
    
    fetch(url)
        .then( data => data.json())
        .then( json => {
            
            const data = json;
            dispatch(fetchTempSuccess(data, moreResults, page, typeSearch))
            
        })
        .catch( error => {
            dispatch(fetchTempError())
        })

};

export default fetchData;