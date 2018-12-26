import APIKEY from '../../apikey';
import { fetchTempLoading, fetchTempSuccess, fetchTempError } from '../reducer';

export const fetchData = (state, type, page) => dispatch => {
    
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${state.dataSearch}&page=${page}` 
    
    dispatch(fetchTempLoading());
    
    fetch(url)
        .then( data => data.json())
        .then( json => {
            
            const data = json;
            dispatch(fetchTempSuccess(data, type, page))
            
        })
        .catch( error => {
            dispatch(fetchTempError())
        })

};

export default fetchData;