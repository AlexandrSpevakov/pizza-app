import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { IPizzaItem } from "../../models/IPizzaItem";

export interface FetchItems {
  activeCategory: number;
  sortedPropertyName: string;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  REJECTED = "rejected",
}

interface PizzasSliceState {
  status: Status;
  items: IPizzaItem[];
}

export const fetchItems = createAsyncThunk<IPizzaItem[], FetchItems>(
  "pizzas/fetchItemsStatus",
  async ({ activeCategory, sortedPropertyName }) => {
    const { data } = await axios.get<IPizzaItem[]>(
      `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items?${
        activeCategory > 0 ? `category=${activeCategory}&` : ""
      }sortBy=${sortedPropertyName}`,
    );
    return data;
  },
);

const initialState: PizzasSliceState = {
  items: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IPizzaItem[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchItems.rejected, (state) => {
      state.items = [];
      state.status = Status.REJECTED;
    });
  },
});

export const selectPizzasData = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
