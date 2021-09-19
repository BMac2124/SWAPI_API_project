import { start, success, fail } from '../actions';

const intialState = {
    swapiData: [],
    error: "",
    isFetching: false,
}

function swapiReducer(state = intialState, action) {
    switch (action.type) {
        case start:
            return { ...state, isFetching: true };
        case success:
            return { ...state, swapiData: action.payload, isFetching: false };
        case fail:
            return { ...state, error: action.padyload, isFetching: false };
        default:
            return state
    }
}

export default swapiReducer