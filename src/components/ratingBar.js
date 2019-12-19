import React, { useState } from "react";
import "../assets/styles/rating.scss";
import { Emotes } from "../constants";
export default function RatingBar({ setRating }) {
  const [rate, setRate] = useState("");

  const select = value => {
    setRate(value);
    setRating(value);
  };

  return (
    <ul className="list-inline d-flex rate-container">
      {Emotes.map((x, i) => (
        <li
          className={`list-inline-item d-flex align-items-center ${
            x.id === rate ? "selected" : ""
          } `}
          key={i}
          onClick={() => select(x.id)}
        >
          {rate === x.id ? (
            <div className="rate-emote">
              <div className="emote">
                <img
                  src={x.img}
                  className={`${i === Emotes.length - 1 ? "last" : ""}`}
                  alt={x.name}
                />
              </div>
              <p className={`name ${i === Emotes.length - 1 ? "last" : ""}`}>
                {x.name}
              </p>
            </div>
          ) : (
            <div className="rate-count">
              <div className="number">
                <span>{x.id}</span>
              </div>
              <p className="name">{x.name}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
