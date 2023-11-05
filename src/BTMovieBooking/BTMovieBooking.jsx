import React from "react";
import data from "./data.json";
import { ChairList } from "./ChairList";
import { Result } from "./Result";
import "./style.css";
import bgImg from "./bgmovie.jpg";
export const BTMovieBooking = () => {
  return (
    <div className="container">
      <div class="demo-wrap">
        <img className="demo-bg" src={bgImg}></img>
        <div className="bg-text">
          <div className="row">
            <div className="col-7">
                <h2 className="text-center " style={{color:'#fbc206',}}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
                <h4 className="text-center text-white">Màn hình</h4>
              <div className="p-3 fw-bold mb-5" style={{backgroundColor:'#fe9f5f',}}>
                <br />
              </div>
              <ChairList data={data} />
              <br /><br />
            </div>
            <div className="col-5">
              <Result />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
