"use client";

import Link from "next/link";
import styles from "./style.module.css";

const Page = () => {
    return (
        <div className={styles.container}>
            <Link href="/admin/categories" className={styles.linkButton}>
                Kategoriler
            </Link>
            <Link href="/admin/products" className={styles.linkButton}>
                Ürünler
            </Link>
        </div>
    );
};

export default Page;
