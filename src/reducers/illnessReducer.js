import _ from 'lodash';
import { SELECT_ILLNESS, FETCH_ILLNESSES, FETCH_WAITINGLIST, FETCH_HOSPITALS } from '../actions/types';

// const 

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ILLNESSES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
            
        case FETCH_WAITINGLIST:
            console.log('FETCH_WAITINGLIST payload: ',action.payload);
            return { ...state, waitingList: action.payload };

        case FETCH_HOSPITALS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };

        default:
            return state;
    }
}