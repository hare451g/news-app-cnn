import produce from 'immer';
import api from '../../api';

export const initialState = {
  error: null,
  isLoading: false,
  judul: '',
  poster: '',
  body: '',
};

const CONTEXT = 'FETCH_DETAILS';
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
    payload: data,
  }),

  onFetchRejected: (error) => ({
    type: FETCH_REJECTED,
    payload: { error },
  }),
};

export const effects = {
  fetchDetails: async (dispatch, category, id, slug) => {
    try {
      dispatch(action.onFetchStart());

      const { data, error } = await api.getNewsDetails(category, id, slug);

      if (error) {
        throw new Error(error);
      }

      dispatch(action.onFetchFullfilled(data[0]));
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
      draft.judul = action.payload.judul;
      draft.poster = action.payload.poster;
      draft.body = action.payload.body;
      break;
    case FETCH_REJECTED:
      draft.isLoading = false;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
