import Image from "next/image";
import styles from "./page.module.css";
import BestSellerProducts from "@/components/User/BestSellerProducts/BestSellerProducts";
import UserCategoryList from "@/components/User/CategoryList/CategoryList";

export default function Home() {
  return (
   <div>
    <UserCategoryList/>
    <BestSellerProducts/>
   </div>
  );
}
