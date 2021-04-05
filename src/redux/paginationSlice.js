import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _page: 1,
  _limit: 1,
  total: 0,
};

const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState,
  reducers: {
    setPagination(state, action) {
      const { _page, _limit, total } = action.payload;
      state._page = _page;
      state._limit = _limit;
      state.total = total;
    },
    onPageChange(state, action) {
      state._page = action.payload;
    },
    onPagePrevious(state) {
      state._page -= 1;
    },
    onPageNext(state) {
      state._page += 1;
    },
  },
});

export const {
  setPagination,
  onPageChange,
  onPageNext,
  onPagePrevious,
} = paginationSlice.actions;
export default paginationSlice.reducer;
