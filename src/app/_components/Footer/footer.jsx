import styles from './footer.module.css'
import Link from 'next/link'
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <Link href='#'>
                    <h1>Let's talk</h1>
                </Link>
                <div className={styles.links}>
                    <p>Get in Touch</p>
                    <div className={styles.socials}>
                        <Link href="#"><FaLinkedinIn /></Link>
                        <Link href="#"><FaXTwitter /></Link>
                        <Link href="#"><FaInstagram /></Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerText}>
                <p>&copy; 2024 Wacko Pix. All rights reserved.</p>
                <p>Design & Dev by <Link href="https://www.volshauz.com/" target='_blank'><b>Edwin Liby</b></Link></p>
            </div>
        </div>
    )
}
