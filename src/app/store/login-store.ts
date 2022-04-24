import { createFeatureSelector } from '@ngrx/store';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { IRootState } from 'src/app/app.module';

export interface IRLoginUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IRLogin {
  user: IRLoginUser[];
  activeUserId: number;
}

/**
 * Notice how we have used createSelector for fetching list and post by ID but
 * not for random blog post. This is because createSelector memoizes
 * the result and recomputes only if input param has changed
 */
export const getBlogPosts = createSelector(
  (state: IRootState) => state.logindata.user,
  (data) => data
);

export const getBlogPostById = createSelector(
  (state: IRootState, id: number) =>
    state.logindata.user.filter((post) => post.id === id),
  (data) => data[0]
);

export const blogSlice = createSlice({
  name: 'login-data',
  initialState: {
    user: [
      {
        id: -1,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
    ],
    activeUserId: 1,
  },
  reducers: {
    addLoginUser: (state, action) => {
      state.user = [action.payload];
    },
    setactiveUserId: (state, action) => {
      state.activeUserId = action.payload;
    },
    setLogOutUser: (state, action) => {
      const index =
        state.user &&
        state.user.findIndex((value) => value.id === action.payload.id);
      if (index !== -1) {
        state.user.splice(index, 1);
      }
    },
  },
});

export const { addLoginUser, setactiveUserId, setLogOutUser } =
  blogSlice.actions;
export default blogSlice.reducer;

export const selectFeature =
  createFeatureSelector<ReturnType<typeof blogSlice.reducer>>('login');
