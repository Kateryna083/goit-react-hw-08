import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedContactsReducer = persistReducer(
  {
    key: "user-contacts",
    storage,
    whitelist: ["items: []"],
  },
  contactReducer
);

const persistedFiltersReducer = persistReducer(
  {
    key: "user-filters",
    storage,
    whitelist: ["name: "" "],
  },
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contact: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
