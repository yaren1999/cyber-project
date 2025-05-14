import Image from "next/image";
import styles from "./page.module.css";
import BestSellerProducts from "@/components/User/BestSellerProducts/BestSellerProducts";
import UserCategoryList from "@/components/User/CategoryList/CategoryList";
import BigPicture from "@/components/User/BigPicture/BigPicture";
import Promotion from "@/components/User/Promotion/Promotion";
import Footer from "@/components/User/Footer/Footer";
import ShowCase from "@/components/User/ShowCase/ShowCase";

export default function Home() {
  return (
   <div>
    <BigPicture/>
    <UserCategoryList/>
    <Promotion/>
    <ShowCase/>
    <BestSellerProducts/>
    <Footer/>
   </div>
  );
}
