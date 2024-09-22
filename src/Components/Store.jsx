
// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './ItemSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
