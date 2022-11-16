import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk('cardIt/fetchCards', async () => {
  const response = await fetch(
    'https://631613995b85ba9b11ef1dde.mockapi.io/cards'
  );
  const data = await response.json();
  const newData = data.map((card) => {
    return { ...card, bookmark: false };
  });
  return newData;
});

const initialState = { data: [], status: null, error: null, bookmark: [] };

export const cardSlice = createSlice({
  name: 'cardIt',
  initialState,
  reducers: {
    handleBookmark: (state, action) => {
      state.data.map((card) => {
        if (card.tail === action.payload) {
          card.bookmark = !card.bookmark;
        }
        return card;
      });
    },
    handleDelete: (state, action) => {
      const filteredCard = state.data.filter(
        (card) => card.tail !== action.payload
      );
      state.data = filteredCard;
    },
    handleFilterBookmark: (state) => {
      const filteredCard = state.data.filter((card) => card.bookmark === true);
      state.data = filteredCard;
    },
  },
  extraReducers: {
    [fetchCards.pending]: (state) => {
      state.status = 'loading...';
      state.error = null;
    },
    [fetchCards.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.data = action.payload;
    },
    [fetchCards.rejected]: (state, action) => {},
  },
});

export const { handleBookmark, handleDelete, handleFilterBookmark } =
  cardSlice.actions;

export default cardSlice.reducer;
