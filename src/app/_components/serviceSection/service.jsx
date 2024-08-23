import styles from './service.module.css'
import s1 from '../../../../public/assets/s1.png'
import s2 from '../../../../public/assets/s2.png'
import s3 from '../../../../public/assets/s3.png'
import s4 from '../../../../public/assets/s4.png'
import Image from 'next/image'

const data = [
    {
        img: s1,
        title: "Brand Imaging",
        subtitle: "Videography",
    },
    {
        img: s2,
        title: "Event Photography",
        subtitle: "Management",
    },
    {
        img: s3,
        title: "Comprehensive",
        subtitle: "Content Creation",
    },
    {
        img: s4,
        title: "Corporate Film",
        subtitle: "Production",
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
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={800}
                                height={800}
                            />
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