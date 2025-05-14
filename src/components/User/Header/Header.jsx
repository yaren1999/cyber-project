"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./style.module.css";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import { useState } from "react";
const Header = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term.length > 0) {
            const filtered = products.filter(product =>
                product.productName.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
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
                {filteredProducts.length > 0 && (
                    <ul className={styles.searchResults}>
                        {filteredProducts.map(product => (
                            <li key={product.productId}>
                                <Link href={`/productDetail/${product.productId}`}>
                                    <div className={styles.searchItem}>
                                        <Image src={product.image} width={40} height={40} alt={product.productName} />
                                        <span>{product.productName}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
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

            {/* İkonlar */}
            <div className={styles.icons}>
                <MdFavorite />
                <MdShoppingCart />
                <FaUser />
            </div>
        </nav>
    );
};

export default Header;