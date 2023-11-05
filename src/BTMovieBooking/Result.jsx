import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btMovieBookingActions } from "../store/BTMovieBooking/slice";
export const Result = () => {
  const { chairsBooking, chairsBooked } = useSelector(
    (state) => state.btMovieBooking
  );

  const dispatch = useDispatch();

  return (
    <div className="container ">
      <br />
      <br />
      <h2
        className="font-weight-bold text-white text-center"
        style={{ width: "300px" }}
      >
        DANH SÁCH GHẾ{" "}
      </h2>
      <div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair" style={{ backgroundColor: "gray" }}></div>
          <span className="font-weight-bold text-white ">Ghế đã đặt</span>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair" style={{ backgroundColor: "red" }}></div>
          <span className="font-weight-bold text-white ">Ghế đang đặt</span>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair"></div>
          <span className="font-weight-bold text-white">Ghế chưa đặt</span>
        </div>
      </div>
      <br />
      <table
        className="table"
        style={{
          width: "370px",
        }}
      >
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {chairsBooking.map((ghe) => {
            return (
              <tr>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                <td >
                <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(btMovieBookingActions.setChairsBooking(ghe));
        }}
      > X
      </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Tổng tiền</td>
            <td>
              {chairsBooking.reduce((total, value) => {
                return (total += value.gia);
              }, 0).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button
        className="btn btn-success mt-5"
        onClick={() => {
          dispatch(btMovieBookingActions.setChairsBooked());
          alert('Cảm ơn bạn đã đặt vé, vui lòng kiểm tra email của bạn!')
        }}
      >
        Thanh toán
      </button>
    </div>
  );
};
