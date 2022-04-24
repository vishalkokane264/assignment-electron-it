import { createFeatureSelector } from '@ngrx/store';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { IRootState } from 'src/app/app.module';

export interface IRUserStore {
  id: number;
  title: string;
  author: string;
  createdAt: string;
}

export interface IRUser {
  users: IRUserStore[];
  activeUserId: number;
}

/**
 * Notice how we have used createSelector for fetching list and post by ID but
 * not for random blog post. This is because createSelector memoizes
 * the result and recomputes only if input param has changed
 */
export const getBlogPosts = createSelector(
  (state: IRootState) => state.userlist.users,
  (data) => data
);

export const getBlogPostById = createSelector(
  (state: IRootState, id: number) =>
    state.userlist.users.filter((post) => post.id === id),
  (data) => data[0]
);

// export const getRandomBlogPost = (state: IRootState) => {
//   const posts = state.userlist.posts;
//   return posts[Math.floor(Math.random() * posts.length)];
// };

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [
      {
        id: -1,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
    ],
    activeUserId: -1,
  },
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    setactiveUserId: (state, action) => {
      state.activeUserId = action.payload;
    },
    deleteUser: (state, action) => {
      const index = state.users.findIndex(
        (value) => value.id === action.payload
      );
      if (index !== -1) {
        state.users.splice(index, 1);
      }
      //   state.posts.filter((value) => value.id !== action.payload.id);
    },
  },
});

export const { addUser, setactiveUserId, deleteUser } = userSlice.actions;
export default userSlice.reducer;

export const selectFeature =
  createFeatureSelector<ReturnType<typeof userSlice.reducer>>('user');
