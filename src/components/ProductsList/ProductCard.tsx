"use client";
import { Card, CardDescription, CardTitle } from "../ui/Card-demo1";
import Image from "next/image";
import { useAppDispatch } from "@/redux/app/hooks";
import { saveByProduct } from "@/redux/features/products/productDetails";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: any }) {
  const dispatch = useAppDispatch();
  const route = useRouter();

  const viewProduct = async () => {
    dispatch(saveByProduct(product));
    route.push(`/product/${product.unique_id}`);
  };

  return (
    <Card className=" bg-gray-950  w-full ">
      <div className=" w-full h-72 rounded-md overflow-hidden bg-gray-900 ">
        <Image
          className=" h-full "
          src={`https://admin.refabry.com/storage/product/${product?.product_images[0].name}`}
          alt={""}
          width={320}
          height={340}
        ></Image>
      </div>
      <CardTitle className="text-white ">{product?.name} </CardTitle>
      <CardDescription>
        A card that showcases a set of tools that you use to create your
        product.
      </CardDescription>
      <div className=" flex justify-end w-full items-center ">
        <button
          className=" border p-1 px-3 rounded-sm active:scale-95 cursor-pointer "
          onClick={viewProduct}
        >
          view details
        </button>
      </div>
    </Card>
  );
}

export function ProductCardLoading() {
  return (
    <Card className=" bg-gray-950 ">
      <div className=" w-full h-60 bg-gray-700 rounded-md animate-pulse "></div>
      <CardTitle className="text-white ">
        <p className=" animate-pulse bg-gray-700 h-5 mt-1 rounded-xs "></p>
      </CardTitle>
      <CardDescription>
        <p className=" animate-pulse bg-gray-700 h-3 mt-1 rounded-xs"></p>
        <p className=" animate-pulse bg-gray-700 h-3 mt-1 rounded-xs"></p>
      </CardDescription>
    </Card>
  );
}
