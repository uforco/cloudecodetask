"use client";
import { useAppSelector } from "@/redux/app/hooks";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

const Page = async () => {
  const params = useParams<{ slug: string }>();
  const data: any = useAppSelector((state) => state.product);

  if (params?.slug !== data?.unique_id) {
    return (
      <div className=" flex w-full flex-col h-screen justify-center items-center ">
        <p>data not found</p>
        <Link className=" my-4 border p-3 rounded-lg " href={"/"}>
          {" "}
          Go Back{" "}
        </Link>
      </div>
    );
  }

  console.log(data);

  const buyProduct = async () => {
    const buyItem = await fetch(
      "https://admin.refabry.com/api/public/order/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_ids: data?.product?.id,
          s_product_qty: "2,1",
          c_phone: "01734252112",
          c_name: "test",
          courier: "steadfast",
          address: "mirpur 12 ramzanessamarket",
          advance: null,
          cod_amount: "1250",
          discount_amount: null,
          delivery_charge: "80",
        }),
      }
    );

    if (buyItem?.status !== 200) {
      alert("something is wrong - please try again");
      return;
    }
    alert("your product by successfully");
  };

  return (
    <div className=" flex flex-col lg:flex-row  justify-between h-screen p-2 items-center gap-6 w-full ">
      <div className=" w-full h-full overflow-hidden ">
        <Image
          className=" w-full "
          width={400}
          height={360}
          src={`https://admin.refabry.com/storage/product/${data?.product?.image}`}
          alt={""}
        ></Image>
      </div>
      <div className=" w-full overflow-hidden h-full ">
        <h2 className=" text-4xl ">{data?.product.name}</h2>
        <div className=" my-3 flex items-center gap-5">
          <p>price: {data?.product.price}</p>
          <p>buying_price: {data?.product.buying_price}</p>
          <p>discount: {data?.product.discount_amount}</p>
          <p>In stock: {data?.product.stock}</p>
        </div>
        <div>{data?.product.short_desc}</div>
        <div className=" my-5 flex justify-between items-center gap-3 ">
          <button
            onClick={buyProduct}
            className=" w-full p-2 border hover:bg-green-500 cursor-pointer transition-all active:scale-95 "
          >
            buy
          </button>
          <button className=" w-full p-2 border hover:bg-green-500 cursor-pointer transition-all active:scale-95 ">
            add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
