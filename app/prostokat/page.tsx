"use client" // page.tsx
import { useState } from 'react';

const RectangleAreaCalculator = () => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [area, setArea] = useState<number | null>(null);

  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(Number(event.target.value));
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(event.target.value));
  };

  const calculateArea = () => {
    const calculatedArea = length * width;
    setArea(calculatedArea);
  };

  return (
    <div>
      <h1>Oblicz pole prostokąta</h1>
      <div>
        <label>
          Długość:
          <input
            type="number"
            value={length}
            onChange={handleLengthChange}
          />
        </label>
      </div>
      <div>
        <label>
          Szerokość:
          <input
            type="number"
            value={width}
            onChange={handleWidthChange}
          />
        </label>
      </div>
      <button onClick={calculateArea}>Oblicz pole</button>

      {area !== null && (
        <div>
          <h2>Pole prostokąta: {area} jednostek kwadratowych</h2>
        </div>
      )}
    </div>
  );
};

export default RectangleAreaCalculator;
