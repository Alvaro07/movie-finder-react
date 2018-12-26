import APIKEY from '../../apikey';
import { fetchTempLoading, fetchTempSuccess, fetchTempError } from '../reducer';

export const fetchData = (state) => dispatch => {
    
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${state.dataSearch}&page=${state.pageSearch}` 

    dispatch(fetchTempLoading());
    
    fetch(url)
        .then( data => data.json())
        .then( json => {

            const data = json.Search;
            dispatch(fetchTempSuccess(data))
            
        })
        .catch( error => {
            dispatch(fetchTempError())
        })

};

export default fetchData;