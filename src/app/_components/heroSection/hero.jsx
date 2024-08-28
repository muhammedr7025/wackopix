import styles from './hero.module.css'
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from 'next/link'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.videoContainer}>
                <video
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                >
                    <source
                        id='webm'
                        src='/assets/hero.mp4'
                        type='video/mp4'
                    />
                </video>
                <div className={styles.stats}>
                    <span>200+ Clients</span>
                    <span>5+ years of service
                    </span>
                </div>
            </div>
            <div className={styles.heroContent}>
                <div className={styles.head}>
                    <h1>Wacko Pix</h1>
                    <p>Media Production</p>
                </div>
                <div className={styles.text}>
                    <h3>Capture Moments, Craft Stories.</h3>
                    <p>At Wacko Pix, we bring your events to life with stunning visuals and compelling narratives. From corporate videos to college fests, we cover it all with creativity and passion. Let’s create something unforgettable together.”</p>
                    <div className={styles.socials}>
                        {/* <Link href='#'>Contact Us</Link> */}
                        <Link href="#contact">Contact Us</Link>
                        <Link 
                            href="https://www.youtube.com/@wackopixproductions/shorts"
                            target="_blank"
                        ><FaYoutube /></Link>
                        <Link 
                            target="_blank"
                            href="https://www.instagram.com/wackopixproductions"><FaInstagram /></Link>
                    </div>
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    )
}