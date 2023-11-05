// rafc
import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { btMovieBookingActions } from '../store/BTMovieBooking/slice'
import cn from 'classnames'

export const Chair = ({ ghe }) => {
    const {chairsBooked, chairsBooking } = useSelector((state) => state.btMovieBooking)
    const dispatch = useDispatch()
    return (
        <div
            className={cn('Chair', {
                booking: chairsBooking.find((e) => e.soGhe === ghe.soGhe),
                booked: chairsBooked.find((e) => e.soGhe === ghe.soGhe),
            })}
            onClick={() => {
                dispatch(btMovieBookingActions.setChairsBooking(ghe))
            }}
        >
            {ghe.soGhe}
        </div>
    )
}
