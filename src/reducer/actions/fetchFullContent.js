// import { fetchTempLoading, fetchTempSuccess, fetchTempError } from '../reducer';

// export const fetchFullContent = (state, id) => dispatch => {

//     const url = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}` 

//     dispatch(fetchTempLoading());
    
//     fetch(url)
//         .then( data => data.json())
//         .then( json => {
            
//             const data = json;
//             dispatch(fetchTempSuccess(data))
            
//         })
//         .catch( error => {
//             dispatch(fetchTempError())
//         })

// };

// export default fetchFullContent;