import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import delivery from './delivery/sagas';
import recipient from './recipient/sagas';
import deliveryman from './deliveryman/sagas';

export default function* rootSaga(){
  return yield all([auth, delivery, recipient, deliveryman]);
}