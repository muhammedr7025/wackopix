import styles from './service.module.css'
import s1 from '../../../../public/assets/img1.jpg'
import s2 from '../../../../public/assets/s2.png'
import s3 from '../../../../public/assets/s3.png'
import s4 from '../../../../public/assets/s4.png'
import Image from 'next/image'

const data = [
    {
        img: s1,
        title: "Live Event",
        subtitle: "Coverage",
        video: "/assets/liveEvent.mp4"
    },
    {
        img: s2,
        title: "Promotional",
        subtitle: "Videos",
        video: "/assets/socmed.mp4"
    },
    {
        img: s3,
        title: "Comprehensive",
        subtitle: "Content Creation",
        video: "/assets/corp.mp4"
    },
    {
        img: s4,
        title: "Corporate Video",
        subtitle: "Production",
        video: "/assets/event.mp4"
    },
]

export default function Service() {
    return (
        <div className={styles.service} id='services'>
            <h1>Services</h1>
            <div className={styles.container}>
                {
                    data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <video
                                autoPlay
                                loop
                                muted
                                className={styles.video}
                            >
                                <source
                                    id='webm'
                                    src={item.video}
                                    type='video/mp4'
                                />
                            </video>
                            {/* <Image
                                src={item.img}
                                alt={item.title}
                                width={800}
                                height={800}
                            /> */}
                            <div className={styles.text}>
                                <h2>{item.title}</h2>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}