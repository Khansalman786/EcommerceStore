import { createAppSlice } from "../../app/createAppSlice"

const initialState = {
  value: 0,
  status: "idle",
}

export const counterSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: create => ({
    increment: create.reducer(state => {
      state.value += 1
    }),
  }),
  selectors: {
    selectCount: counter => counter.value,
    selectStatus: counter => counter.status,
  },
})

export const { increment } = counterSlice.actions

export const { selectCount, selectStatus } = counterSlice.selectors
