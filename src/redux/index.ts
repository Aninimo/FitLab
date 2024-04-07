import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'added',
  initialState: {
    added: [],
    exerciseCount: 0,
    water: 0,
    walk: 0,
  },
  reducers: {
    addMeal: (state, action) => {
      const mealItem = state.added.find((item) => item.id == action.payload.id)
      state.added.push({ ...action.payload })
    },
    incrementWater: (state, action) => {
      state.water += action.payload
    },
    incrementWalk: (state, action) => {
      state.walk++
    },
    incrementExerciseCount: (state) => { 
      state.exerciseCount++
    },
  }
})

export const { addMeal, incrementWater, incrementWalk, incrementExerciseCount } = slice.actions;

export default slice.reducer;
