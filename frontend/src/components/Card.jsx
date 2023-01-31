import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div class="product-card">
      <div class="badge">New</div>
      <div class="product-tumb">
        <img src={props.image} alt="" />
      </div>
      <div class="product-details">
        <span class="product-catagory">{props.catagory}</span>
        <h4>
          <a href={props.link}>{props.title}</a>
        </h4>
        <p>{props.description}</p>
        <div class="product-bottom-details">
          <div class="product-price">{props.price}
          </div>
          <div class="product-links">
            <a href="">
              <i class="fa fa-heart"></i>
            </a>
            <a href="">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
