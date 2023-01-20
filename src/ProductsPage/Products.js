import React, { useEffect, useState } from "react";
import { GetProducts } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import PCard from "../components/Card";
import CAppBar from "../components/AppBar";
import CSkeleton from "../components/CSkeleton";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProducts.products);
  const Loading = useSelector((state) => state.getProducts.isLoading);
// src/pages/Home.js
  const Pr = () => {
    if (products) {
      return products?.map((item) => (
        <PCard
          title={item.title}
          thumbnail={item.thumbnail}
          key={item.id}
          id={item.id}
          price={item.price}
          discountPercentage={item.discountPercentage}
        />
      ));
    }
  };
  useEffect(() => {
    dispatch(GetProducts());
  }, []);

  return (
    <>
      <CAppBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Loading ? <CSkeleton /> : Pr()}
      </div>
    </>
  );
};

export default Products;
