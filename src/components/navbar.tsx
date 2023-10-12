import Link from "next/link";
import styles from "../styles/scss/componentsStyles/navbar.module.scss";

import { AiFillHome} from "react-icons/ai";


export default function Navbar() {
    return (
            <section className={styles.navbar}>
                <div className={styles.links}>
                    <div className={styles.views}>  
                        <div className={styles.tags}>
                            <Link href="/">
                                <AiFillHome />
                            </Link>
                        </div>
                        <div className={styles.tags}>
                            <Link href="/content/frontEnd">
                                <p>FrontEnd</p>
                            </Link>
                        </div>
                        <div className={styles.tags}>
                            <Link href="/content/backEnd">
                                <p>BackEnd</p>
                            </Link>
                        </div>
                        <div className={styles.tags}>
                            <Link href="/content/fullStack">
                            <p>FullStack</p>
                            </Link> 
                        </div>
                    </div>    
                    <div className={styles.auth}>
                        <div className={styles.tags}>
                            <Link href="/auth/login">
                                <p>Login</p>
                            </Link> 
                        </div>
                        <p>ou</p>
                        <div className={styles.tags}>
                            <Link href="/auth/signUp">
                                <p>Sing Up</p>
                            </Link>
                        </div>    
                    </div>
                </div>
                <div className={styles.linha}>
                    <hr/> 
                </div>
                
            </section>      
    );
}
