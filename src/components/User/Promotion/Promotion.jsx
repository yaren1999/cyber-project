"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./style.module.css";

const Promotion = () => {
  const productId = "680a81463ae7d867098f63bc"; 

  return (
    <div className={styles.frame}>
      <div className={styles.container1}>
        <div className={styles.container1_1}>
          <img src="/promotion/tablet6.png" alt="Tablet" className={styles.tablet} />
          <div className={styles.textContainer}>
            <h1 className={styles.h1P}>Tablet</h1>
            <p className={styles.infoP}>Benzersiz tasarımı ile dokunuşun hazzını yaşa.</p>
          </div>
        </div>

        <div className={styles.container1_2}>
          <img src="/promotion/kulaklık.png" alt="Kulaklık" className={styles.kulaklik} />
          <div className={styles.textContainer2}>
            <p className={styles.titleKulaklik}>Apple AirPods</p>
            <p className={styles.titleKulaklik2}>İnce tasarım, güçlü ses.</p>
          </div>
        </div>

        <div className={styles.container1_3}>
          <img src="/promotion/samsung3.png" alt="Samsung Phone" className={styles.phone} />
          <div className={styles.textContainer3}>
            <p className={styles.phoneTitle}>Samsung</p>
            <p className={styles.phoneDesc}>Gerçekliğe yeni bir pencere aç.</p>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.textContainer4}>
          <p className={styles.macbook1}>MacBook Air</p>
          <p className={styles.macbook2}>Hafif, güçlü ve her yere seninle.</p>
          <p className={styles.macbook2}>MacBook Air'ın benzersiz sıradışı özellikleriyle artık sizlerle.</p>
        </div>
        <img src="/promotion/macbook.png" alt="MacBook Pro 14" className={styles.MacBookPro14} />
      
        <Link href={`/products/${productId}`} className={styles.shopButton}>
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Promotion;
