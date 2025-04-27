import Image from "next/image";
import styles from "./page.module.css";
import BestSellerProducts from "@/components/User/BestSellerProducts/BestSellerProducts";
import UserCategoryList from "@/components/User/CategoryList/CategoryList";
import BigPicture from "@/components/User/BigPicture/BigPicture";

export default function Home() {
  return (
   <div>
    <BigPicture/>
    <UserCategoryList/>
    <BestSellerProducts/>
   </div>
  );
}
