import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments as dbAssignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

export type Assignment = {
  _id: string;
  title: string;
  description: string;
  course: string;
  available: string;
  due: string;       
  until: string;     
  points: number;
};

type State = {
  assignments: Assignment[];
};

const initialState: State = {
  assignments: dbAssignments as unknown as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }: PayloadAction<Omit<Assignment, "_id">>) => {
      const newAssignment: Assignment = { ...payload, _id: uuidv4() };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload }: PayloadAction<string>) => {
      state.assignments = state.assignments.filter((a) => a._id !== payload);
    },
    updateAssignment: (state, { payload }: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
    },
    
    setAssignments: (state, { payload }: PayloadAction<Assignment[]>) => {
      state.assignments = payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
