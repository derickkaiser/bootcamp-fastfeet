import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
}

export default function auth(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@delivery/EDIT_REQUEST': {
        draft.delivery = action.payload.delivery;
        break;
      }
      case '@delivery/EDIT_SUCCESS': {
        draft.delivery = null;
        break;
      }
      default:
    }
  });
}