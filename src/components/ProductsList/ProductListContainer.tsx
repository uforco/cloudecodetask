"use client";
import React from "react";
import ProductCard, { ProductCardLoading } from "./ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/products/products";

const ProductListContainer = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProductsQuery(undefined);

  let containers;

  if (isLoading) {
    containers = (
      <div className=" grid grid-cols-3 gap-6 ">
        <ProductCardLoading></ProductCardLoading>
        <ProductCardLoading></ProductCardLoading>
        <ProductCardLoading></ProductCardLoading>
        <ProductCardLoading></ProductCardLoading>
        <ProductCardLoading></ProductCardLoading>
        <ProductCardLoading></ProductCardLoading>
      </div>
    );
  }
  if (!isLoading && !isSuccess && isError) {
    containers = (
      <div className=" w-full h-screen flex justify-center items-center ">
        something is wrong
      </div>
    );
  }
  if (
    !isLoading &&
    isSuccess &&
    !isError &&
    products.status &&
    products.data.total <= 1
  ) {
    containers = (
      <div className=" w-full h-screen flex justify-center items-center ">
        No Data Found
      </div>
    );
  }
  if (
    !isLoading &&
    isSuccess &&
    !isError &&
    products.status &&
    products.data.total > 0
  ) {
    containers = (
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.data.data.map((product: any) => (
          <ProductCard key={product.unique_id} product={product}></ProductCard>
        ))}
      </div>
    );
  }

  return containers;
};

export default ProductListContainer;
