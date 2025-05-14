import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

const BigPicture = () => {
    const productId = "680a81463ae7d867098f63bc";  

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p>Pro Beyond</p>
                <h1>Iphone 14 Pro</h1>
                <p>Create change everything for the better.</p>

               
                <Link href={`/products/${productId}`} className={styles.shopButton}>
                    Buy Now
                </Link>
            </div>
        </div>
    );
};

export default BigPicture;
