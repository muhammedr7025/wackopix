import styles from './hero.module.css'
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
                        src='/assets/dummy.mp4'
                        type='video/mp4'
                    />
                </video>
                <div className={styles.stats}>
                    <span>2000+ Clients</span>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <Link href='#'>Book a slot</Link>
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    )
}