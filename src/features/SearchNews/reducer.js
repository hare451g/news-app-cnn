import produce from 'immer';
import api from '../../api';

export const initialState = {
  error: null,
  isLoading: false,
  list: [],
};

const CONTEXT = 'SEARCH_NEWS';
const FETCH_PENDING = `${CONTEXT}_PENDING`;
const FETCH_FULLFILLED = `${CONTEXT}_FULLFILLED`;
const FETCH_REJECTED = `${CONTEXT}_REJECTED`;

export const action = {
  onFetchStart: () => ({
    type: FETCH_PENDING,
    payload: {},
  }),

  onFetchFullfilled: (data) => ({
    type: FETCH_FULLFILLED,
    payload: { data },
  }),

  onFetchRejected: (error) => ({
    type: FETCH_REJECTED,
    payload: { error },
  }),
};

export const effects = {
  fetchByKeyword: async (dispatch, keyword) => {
    try {
      dispatch(action.onFetchStart());

      const { data, error } = await api.getNewsByKeyword(keyword);

      if (error) {
        throw new Error(error);
      }

      dispatch(action.onFetchFullfilled(data));
    } catch (error) {
      dispatch(action.onFetchRejected(error.message));
    }
  },
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_PENDING:
      draft.error = null;
      draft.isLoading = true;
      break;
    case FETCH_FULLFILLED:
      draft.isLoading = false;
      draft.list = action.payload.data;
      break;
    case FETCH_REJECTED:
      draft.isLoading = false;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
