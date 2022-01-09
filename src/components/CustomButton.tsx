import React, { Props } from "react";

const CustomRightArrow: React.FC<any> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Go to next slide"
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
    />
  );
};
const CustomLeftArrow: React.FC<any> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Go to previous slide"
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
    />
  );
};

export const ButtonGroup: React.FC<any> = ({ next, previous }) => {
  return (
    <div className="carousel-button-group">
      <CustomRightArrow onClick={() => next()} />
      <CustomLeftArrow onClick={() => previous()} />
    </div>
  );
};
