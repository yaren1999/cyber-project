import Image from "next/image";
import styles from "./page.module.css";
import BestSellerProducts from "@/components/User/BestSellerProducts/BestSellerProducts";

export default function Home() {
  return (
   <div>
    <BestSellerProducts/>
   </div>
  );
}
