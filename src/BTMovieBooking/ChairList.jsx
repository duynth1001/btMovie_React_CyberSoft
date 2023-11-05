//rafc
import React from "react";
import { Chair } from "./Chair";

export const ChairList = ({ data }) => {
  return (
    <div>
      {data.map((hangGhe) => {
        return (
          <div
            key={hangGhe.hang}
            className="d-flex justify-content-center gap-3 mt-3"
          >
            <div
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                fontWeight: '900'
              }}
            >
              {hangGhe.hang}
            </div>
            <div className="d-flex gap-3">
              {hangGhe.danhSachGhe.map((ghe) => {
                if (ghe.soGhe <= 12) {
                  return (
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: '900'
                      }}
                    >
                      {ghe.soGhe}{" "}
                    </div>
                  );
                } else {
                  return <Chair ghe={ghe} key={ghe.soGhe} />;
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
