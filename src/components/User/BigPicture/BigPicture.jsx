import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

const BigPicture = () => {
   
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p>Pro Beyond</p>
                <h1>Iphone 14 Pro</h1>
                <p>Create change everything for the better.</p>

               
                <Link href='buton' className={styles.shopButton}>
                    Buy Now
                </Link>
            </div>
        </div>
    );
};

export default BigPicture;
