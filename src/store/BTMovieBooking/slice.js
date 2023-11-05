import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chairsBooking: [],
    chairsBooked: [],
}

export const btMovieBookingSlice = createSlice({
    name: 'BTMovieBooking',
    initialState,
    reducers: {
        setChairsBooking: (state, {payload}) => {
                const index = state.chairsBooking.findIndex((value) => value.soGhe === payload.soGhe)
                if (index !== -1) {
                    state.chairsBooking.splice(index, 1)
                } else {
                    state.chairsBooking.push(payload)
                }
        },
        setChairsBooked: (state,{ payload }) => {
            state.chairsBooked = [...state.chairsBooked, ...state.chairsBooking]
            state.chairsBooking = []
        },
    },
})

export const { reducer: btMovieBookingReducer, actions: btMovieBookingActions } =
    btMovieBookingSlice
