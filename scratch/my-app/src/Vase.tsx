import React from 'react';
import { Flower } from "./flowers";

interface VaseProps {
  flowers: Flower[];
}

export const Vase = ({ flowers }: VaseProps) => {
  const flowerNodes = flowers.map((flower, i) => {
    return (
      <div key={`flower_${i}`}>
        <p>type: {flower.constructor.name}</p>
        <p>color: {flower.color}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>My Vase</h2>
      {flowerNodes}
    </div>
  );
};
