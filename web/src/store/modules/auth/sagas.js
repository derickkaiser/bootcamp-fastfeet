import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { loginSuccess } from './actions';

export function* login({payload}){
    const { email, password} = payload;

    const response = yield call(api.post, '/sessions', { email, password});

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token));

    history.push('/deliveries');
}

export function setToken({payload}){
    if(!payload) return;
  
    const { token } = payload.auth;
  
    if(token){
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all(
    [takeLatest('@auth/LOGIN_REQUEST', login),
    takeLatest('persist/REHYDRATE', setToken)],
);