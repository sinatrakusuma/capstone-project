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
            <Cardimg backgroundImage=" url(./d.jpg)" />
            {/* <div className="card__background"></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Celengan</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./e.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Vas Bunga</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./f.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Vas Bunga</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./g.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Piring</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./h.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Miniatur sampah</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./i.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Totbag</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./l.jpg)" />
            {/* <div className="card__background" ></div> */}
            <div className="card__content">
              {/* <p className="card__category">Category</p> */}
              <h3 className="card__heading">Kotak Pensil</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Cardimg backgroundImage=" url(./k.jpg)" />
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
