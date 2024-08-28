import styles from './footer.module.css'
import Link from 'next/link'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className={styles.footer} id='contact'>
            <div className={styles.content}>
                <Link href='#'>
                    <h1>Let's talk</h1>
                </Link>
                <div className={styles.links}>
                    <p>Get in Touch</p>
                    <div className={styles.contacts}>
                        <div className={styles.contactIcons}>
                            <Link href="#"><FaPhone /></Link>
                            <span style={{marginLeft: '1rem'}}>+91 7025907742</span>
                        </div>
                        <div className={styles.contactIcons}>
                            <Link href="#"><FaPhone /></Link>
                            <span style={{marginLeft: '1rem'}}>+91 7306036556</span>
                        </div>
                        <div className={styles.contactIcons}>
                            <Link href="#"><MdOutlineEmail /></Link>
                            <span style={{marginLeft: '1rem'}}>wackopixofficial@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerText}>
                <p>&copy; {new Date().getFullYear()} Wacko Pix. All rights reserved.</p>
                <p>Design & Dev by <Link href="https://www.volshauz.com/" target='_blank'><b>Edwin Liby</b></Link></p>
            </div>
        </div>
    )
}
