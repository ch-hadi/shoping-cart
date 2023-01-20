import React from "react"; // src/components/Total.js
import { useSelector } from "react-redux";

const Total = () => {
  const cart = useSelector((state) => state.cart.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    console.log(totalPrice)
    cart.forEach((item) => {
        console.log(item)
      totalQuantity += item.quantity;
      totalPrice += item.newPrice * item.quantity;
    });
    console.log(totalPrice, totalQuantity)
    return { totalPrice, totalQuantity };
  };
  return (
    <div>
      <p className="total__p">
        total ({getTotal().totalQuantity} items) :{" "}
        <strong>${getTotal().totalPrice}</strong>
      </p>
    </div>
  );
};

export default Total;
