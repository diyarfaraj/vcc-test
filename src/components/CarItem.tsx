import React, { Props } from "react";
import { Block } from "vcc-ui";
import { Car } from "../Interfaces/ICar";

export const CarItem: React.FC<Car> = (item) => {
  return (
    <Block>
      <div className="car-item" id={item.id} key={item.id}>
        <text style={{ color: "grey" }}>{item.bodyType}</text>
        <p>
          <text className="bold">{item.modelName}</text>
          <span style={{ color: "grey" }}> {item.modelType}</span>
        </p>
        <img src={item.imageUrl} width={320} height={250} />
        <div>
          <span className="details">Learn</span>
          <span className="details">Shop</span>
        </div>
      </div>
    </Block>
  );
};
