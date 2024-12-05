import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
      data: [],
      isLoading: false,
      error: null,
};

// insert data in db
export const insert = createAsyncThunk('rejester/insert', async (Data, thunkAPI) => {
      try {
            // Add current time to the data
            const currentDate = new Date();
            const dateString = currentDate.toLocaleDateString('en-GB');
            const timeString = currentDate.toLocaleTimeString('en-GB', { hour12: true });
            const dataWithTime = { ...Data, time: `${dateString} - ${timeString}` }; // Add time to the data object

            // Send data with time to Firebase
            const res = await fetch("https://bsa-team-default-rtdb.firebaseio.com/rejesters.json", {
                  method: 'POST',
                  body: JSON.stringify(dataWithTime),
                  headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                  },
            });

            const data = await res.json();
            return data;
      } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
      }
});

const rejesterSlice = createSlice({
      name: "rejester",
      initialState,
      extraReducers: (builder) => {
            builder
                  .addCase(insert.pending, (state) => {
                        state.isLoading = true;
                        state.error = null;
                  })
                  .addCase(insert.fulfilled, (state, action) => {
                        state.isLoading = false;
                        const newData = {
                              id: action.payload.name, // Firebase ID
                              ...action.meta.arg, // original data
                        };
                        state.data.push(newData);
                        state.error = null;
                  })
                  .addCase(insert.rejected, (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                        console.log(action.payload)
                  });
      }
});

export default rejesterSlice.reducer;
