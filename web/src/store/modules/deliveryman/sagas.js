import { takeLatest, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

export function editRequest(){
    history.push('/deliverymen/edit');
}

export function* createRequest({payload}){
    try{
        const {deliveryman} = payload;

        yield api.post('/deliverymen', deliveryman);

        history.push('/deliverymen');
    }catch(err){
        console.tron.error('Error while creating deliveryman.');
    }
}

export function* editSuccess({payload}){
    try{
        const {deliveryman} = payload;

        console.tron.log(deliveryman);

        yield api.put(`deliverymen/${deliveryman.id}`, deliveryman);

        history.push('/deliverymen');
    }catch(err){
        console.tron.log(err);
        //console.tron.error(`Error while updating deliveryman.`);
    }
}

export default all(
    [
        takeLatest('@deliveryman/EDIT_REQUEST', editRequest),
        takeLatest('@deliveryman/CREATE_REQUEST', createRequest),
        takeLatest('@deliveryman/EDIT_SUCCESS', editSuccess),
    ],
);