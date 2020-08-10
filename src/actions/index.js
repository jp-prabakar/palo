import illnesses from '../apis/illnesses'
import hospitals from '../apis/hospitals';
import { SELECT_ILLNESS, FETCH_ILLNESSES, FETCH_WAITINGLIST, FETCH_HOSPITALS } from './types';

export const selectIllness  = () => {
    return {
        type: SELECT_ILLNESS
    };
};

export const fetchIllnesses  = () => async dispatch => {
    const response = await illnesses.get('/illnesses');
    
    let myIllnesses =  [];
    response.data._embedded.illnesses.map(illnesses => {

        return (
            myIllnesses.push({
                                id: illnesses.illness.id,
                                name: illnesses.illness.name
                            })
        );
    });

    dispatch({ type: FETCH_ILLNESSES, payload: myIllnesses });
    };

    function sortByWaitingTime(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    export const fetchWaitingList  = severity => async dispatch => {
        const response = await hospitals.get('/hospitals');
        console.log('action: fetchWaitingList');
        console.log('severity', severity);
        console.log('WaitingList response', response.data._embedded.hospitals);

        let myWaitingList = [];

        response.data._embedded.hospitals.map(hospital => {
            return (
                hospital.waitingList.map(waitList => {
                    // console.log('waitList:', waitList);
                    if (severity == waitList.levelOfPain) {
                        console.log('Found severity');
                        return (
                            myWaitingList.push({
                                id: hospital.id,
                                name: hospital.name,
                                patientCount: waitList.patientCount,
                                levelOfPain: waitList.levelOfPain,
                                averageProcessTime: waitList.averageProcessTime,
                                waitingTime: (waitList.averageProcessTime * waitList.patientCount)
                            })
                        );
                    }
                })
            );
        });
    
        myWaitingList = sortByWaitingTime(myWaitingList, 'waitingTime');

        dispatch({ type: FETCH_WAITINGLIST, payload: myWaitingList });
        };

    export const fetchHospitals  = () => async dispatch => {
        const response = await hospitals.get('/hospitals');
        
        console.log('Hospitals response', response.data._embedded.hospitals);
    
        // let myIllnesses =  [];
        // response.data._embedded.illnesses.map(illnesses => {
    
        //     return (
        //         myIllnesses.push({
        //                             id: illnesses.illness.id,
        //                             name: illnesses.illness.name
        //                         })
        //     );
        // });
    
        dispatch({ type: FETCH_HOSPITALS, payload: null });
        };