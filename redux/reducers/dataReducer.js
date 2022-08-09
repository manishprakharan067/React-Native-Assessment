import {DISPLAY_LOADER, REFRESH, COUNTER} from '../Actions';

const initialState = {
  counter: 5,
  _showLoader: false,
  _refresh: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH: {
      return {...state, _refresh: action.data};
    }
    case DISPLAY_LOADER: {
      return {...state, _showLoader: action.data};
    }
    case COUNTER: {
      return {...state, counter: action.data};
    }
    default: {
      return state;
    }
  }
};

export default dataReducer;
