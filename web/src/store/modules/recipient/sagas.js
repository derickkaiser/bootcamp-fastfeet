import { takeLatest, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

export function editRequest(){
    history.push('/recipients/edit');
}

export function* createRequest({payload}){
    try{
        const {recipient} = payload;

        yield api.post('/recipients', recipient);

        history.push('/recipients');
    }catch(err){
        console.tron.error('Error while creating recipient.');
    }
}

export function* editSuccess({payload}){
    try{
        const {recipient} = payload;

        yield api.put(`recipients/${recipient.id}`, recipient);

        history.push('/recipients');
    }catch(err){
        console.tron.error(`Error while updating recipient.`);
    }
}

export default all(
    [
        takeLatest('@recipient/EDIT_REQUEST', editRequest),
        takeLatest('@recipient/CREATE_REQUEST', createRequest),
        takeLatest('@recipient/EDIT_SUCCESS', editSuccess),
    ],
);