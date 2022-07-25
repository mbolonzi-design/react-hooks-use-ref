import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  const prevPriceRef = useRef(price)

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    console.log(`state:${price}`)
    return function () {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log(`before:${prevPriceRef.current}`)
    const prevPrice = prevPriceRef.current
    if(price > prevPrice) {
      setColor("green")
    } else if (price < prevPrice) {
      setColor("red")
    }else {
      setColor("black")
    }

    prevPriceRef.current = price
    console.log(`after:${prevPriceRef.current}`)
  }, [price])

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
