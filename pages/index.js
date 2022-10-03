import Image from 'next/image'
import bgDesktopLight from '../public/images/bg-desktop-light.jpg'
import moon from '../public/images/icon-moon.svg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.background}>
        <Image
          src={bgDesktopLight}
          alt="background-desktop"
        />

        <div className={styles.todo}>
          <h1>TODO</h1>
          <div className={styles.moon}>
          <Image
            src={moon}
            alt="moon"
          />
          </div>
        </div>
    </div>
  )
}
