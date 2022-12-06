// import { Box } from "@mui/material";
import React from "react";
import "./cardbackground.scss";
import Cardimg from "./Cardimg";
const CardBackground = () => {
  return (
    <div className="container">
      <section className="hero-section">
        <div className="card-grid">
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./images/d.jpg)" />
            {/* <div className="card__background"></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Celengan</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./images/e.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Vas Bunga</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./images/f.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Vas Bunga</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./images/g.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Piring</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./images/h.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Miniatur sampah</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./images/i.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Totbag</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./images/l.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Kotak Pensil</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./images/k.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Miniatur</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardBackground;
