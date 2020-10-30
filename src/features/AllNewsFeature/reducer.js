import produce from 'immer';
import api from '../../api';

export const initialState = {
  error: null,
  headline: {
    judul: '',
    link: '',
    poster: '',
    tipe: '',
    waktu: '',
    id: '',
    slug: '',
  },
  isLoading: false,
  list: [],
};

const CONTEXT = 'FETCH_RECENT_NEWS';
const FETCH_PENDING = `${CONTEXT}_PENDING`;
const FETCH_FULLFILLED = `${CONTEXT}_FULLFILLED`;
const FETCH_REJECTED = `${CONTEXT}_REJECTED`;

export const action = {
  onFetchStart: () => ({
    type: FETCH_PENDING,
    payload: {},
  }),

  onFetchFullfilled: (headline, list) => ({
    type: FETCH_FULLFILLED,
    payload: { headline, list },
  }),

  onFetchRejected: (error) => ({
    type: FETCH_REJECTED,
    payload: { error },
  }),
};

export const effects = {
  fetchRecent: async (dispatch, category = '') => {
    try {
      dispatch(action.onFetchStart());

      const { data, error } = await api.getAllNews(category);

      if (error) {
        throw new Error(error);
      }

      dispatch(action.onFetchFullfilled(data.headline, data.list));
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
      draft.headline = action.payload.headline;
      draft.list = action.payload.list;
      break;
    case FETCH_REJECTED:
      draft.isLoading = false;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
