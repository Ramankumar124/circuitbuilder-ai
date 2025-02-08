// store/flowSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RefObject } from "react";

type FlowState = {
  flowRef: RefObject<any> | null;
};

const initialState: FlowState = {
  flowRef: null,
};

export const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    setFlowRef: (state, action: PayloadAction<RefObject<any>>) => {
      state.flowRef = action.payload;
    },
  },
});

export const { setFlowRef } = flowSlice.actions;
export default flowSlice.reducer;
