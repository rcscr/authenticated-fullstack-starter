import { State } from "./types";

const defaultState: State = {
  text: ''
};

export default function rootReducer(state: State = defaultState, action): State {
  switch (action.type) {
    case 'set-user-info':
      return {
        ...state,
        userInfo: action.userInfo
      };

    default:
      return state;
  }
}
