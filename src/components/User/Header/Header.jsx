"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./style.module.css";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

 
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
   
    setFilteredProducts([]);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <Image src="/logo.svg" width={80} height={30} alt="Cyber Logo" />
      </div>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          value={searchTerm}
          onChange={handleSearch}
        />

      </div>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/products" className={styles.link}>Products</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about" className={styles.link}>About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact" className={styles.link}>Contact Us</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/blog" className={styles.link}>Blog</Link>
        </li>
      </ul>

      <div className={styles.icons}>
        <MdFavorite />
        <Link href="/cart" className={styles.cartLink}>
          <MdShoppingCart />
        </Link>
        <FaUser />
      </div>
    </nav>
  );
};

export default Header;
