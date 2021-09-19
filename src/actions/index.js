import axios from 'axios';

export const start = 'start';
export const success = 'success';
export const fail = 'fail';

export const fetchSwapi = () => dispatch => {
    dispatch({ type: start });

    axios.get(`https://swapi.dev/api/people`)
        .then(res => dispatch({
            payload: res.data.results,
            type: success,

        }))
        .catch(error => dispatch({
            payload: error.message,
            type: fail,
        }))
}
