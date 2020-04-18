import produce from 'immer';

const INITIAL_STATE = {
  deliveryman: null,
}

export default function auth(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@deliveryman/EDIT_REQUEST': {
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/EDIT_SUCCESS': {
        draft.deliveryman = null;
        break;
      }
      default:
    }
  });
}