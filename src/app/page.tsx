import { NavbarDemo } from "@/components/navSection/Navbar";
import ProductListContainer from '@/components/ProductsList/ProductListContainer';

export default function Home() {
  return (
    <div className=" min-h-screen px-5 ">
      <NavbarDemo></NavbarDemo>
      <div className=" w-full flex justify-center items-end  " >
      </div>
      <ProductListContainer></ProductListContainer>
    </div>
  );
}
