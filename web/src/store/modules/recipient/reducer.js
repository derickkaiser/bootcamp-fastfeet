import produce from 'immer';

const INITIAL_STATE = {
  recipient: null,
}

export default function auth(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@recipient/EDIT_REQUEST': {
        draft.recipient = action.payload.recipient;
        break;
      }
      case '@recipient/EDIT_SUCCESS': {
        draft.recipient = null;
        break;
      }
      default:
    }
  });
}