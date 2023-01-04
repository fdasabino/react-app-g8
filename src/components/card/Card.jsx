import React from "react";
import "./Card.scss";
import Button from "../button/Button";
import { images } from "../../data";

const Card = () => {
  return (
    <div className="card_wrapper">
      <div className="card_header">
        <div className="avatars">
          <img
            className="avatars"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="placeholder"
          />
          <img
            className="avatars"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="placeholder"
          />
          <img
            className="avatars"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="placeholder"
          />
          <img
            className="avatars"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="placeholder"
          />
        </div>
        <div className="card_info">
          <h3>Remaining Time</h3>
          <h2>09H : 11M : 07S </h2>
        </div>
      </div>
      <div className="card_main_img">
        <img src="/imgs/hero.png" alt="placeholder" />
      </div>
      <div className="card_footer">
        <div className="footer_info">
          <h2>Current Bid</h2>
          <h3>7 ETH</h3>
        </div>
        <Button buttonType="btnPurple">Bid Now</Button>
      </div>
    </div>
  );
};

export default Card;
