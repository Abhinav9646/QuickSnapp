import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: [],
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.data.findIndex(
        item => item.id === action.payload.item.id,
      );
      if (index == -1) {
        state.data.push(action.payload.item);
      }
    },
    removeItem: (state,action)=>{
     state.data = state.data.filter(item=>item.id !=action.payload.item.id);
    }

  },
});

export const { addItem,removeItem} = counterSlice.actions;

export default counterSlice.reducer;
