import { takeLatest, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

export function editRequest(){
    history.push('/deliveries/edit');
}

export function* createRequest({payload}){
    try{
        const {delivery} = payload;

        yield api.post('/deliveries', delivery);

        history.push('/deliveries');
    }catch(err){
        console.tron.error('Error while creating delivery.');
    }
}

export function* editSuccess({payload}){
    try{
        const {delivery} = payload;

        console.tron.log(delivery);

        yield api.put(`deliveries/${delivery.id}`, delivery);

        history.push('/deliveries');
    }catch(err){
        console.tron.error(`Error while updating delivery.`);
    }
}

export default all(
    [
        takeLatest('@delivery/EDIT_REQUEST', editRequest),
        takeLatest('@delivery/CREATE_REQUEST', createRequest),
        takeLatest('@delivery/EDIT_SUCCESS', editSuccess),
    ],
);