import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interfaces for circuit data
interface Node {
  id: string;
  type: string;
  data: Record<string, any>;
  position: { x: number; y: number };
}

interface Edge {
  id: string;
  source: string;
  sourceHandle: string;
  target: string;
  targetHandle: string;
  type: string;
  label?: string;
}


interface CircuitState {
    node: Node | null,
    edge: Edge | null,
  circuitName: string | null;
  explanation: string | null;
  suggestions: string[] | null;
}

const initialState: CircuitState = {
circuitName: null,
node: null,
edge: null,  
explanation: null,
  suggestions: null,
};

export const circuitSlice = createSlice({
  name: "circuit",
  initialState,
  reducers: {
    setCircuit: (state, action: PayloadAction<{ explanation: string; suggestions: string[], circuitName: string, node: Node, edge: Edge }>) => {
      state.node = action.payload.node;
      state.edge = action.payload.edge;
      state.circuitName = action.payload.circuitName;
      state.explanation = action.payload.explanation;
      state.suggestions = action.payload.suggestions;

    },
    clearCircuit: (state) => {
      state.node = null;
      state.edge = null;
      state.edge = null;
      state.explanation = null;
      state.suggestions = null;
    },
  },
});

export const { setCircuit, clearCircuit } = circuitSlice.actions;
export default circuitSlice.reducer;
