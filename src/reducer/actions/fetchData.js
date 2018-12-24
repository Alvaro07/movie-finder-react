import APIKEY from '../../apikey';
import { fetchTempLoading, fetchTempSuccess, fetchTempError } from '../reducer';

export const fetchData = (state) => dispatch => {
    console.log(state.searchValue);
    
    dispatch(fetchTempLoading());
    
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%2C%20madrid%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
        .then( data => data.json())
        .then( json => {
            const temp = json.query.results.channel.item.condition.temp;
            dispatch(fetchTempSuccess(temp))
        })
        .catch( error => {
            dispatch(fetchTempError())
        })

};

export default fetchData;