// import SkillsTitle from '../components/title2'
import styles from '../styles/Home.module.css'
import { FaLaptopCode } from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'

export default function Skills() {
    return (
        <div className={styles.extra}>
            <div className={styles.title}>
                {/* <SkillsTitle /> */}
            </div>
            <div className={styles.container0}>
            <div className={styles.container1}>
            <FaLaptopCode className={styles.skills} size={60} color={'white'} />
                <ul className={styles.list}>
                    <li>HTML5</li>
                    <li>CSS3 + SASS</li>
                    <li>Python</li>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>NextJS</li>
                    <li>Javascript</li>
                    <li>Materialize</li>
                </ul>
            </div>
            <div className={styles.container2}>
                <FaServer size={60} color={'white'} className={styles.skills} />
                <ul className={styles.list}>
                    <li>Postgres</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>SQLAlchemy</li>
                    <li>Flask</li>
                    <li>Heroku CLI</li>
                    <li>Velcer</li>
                    <li>Netlify</li>
                    <li>Git && Github</li>
                </ul>
            </div>

            </div>
        </div>

    )
}