import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/navbar.module.css'
import {useEffect} from 'react'


export default function Navbar() {

    // useEffect(() => {
    //     document.getElementById("home").style.color = "hotpink";

    // }, [])

    return (
        <div className={styles.navbar}>
            <Head>
                <title>Myers Portfolio</title>
            </Head>
            <navbar >
                <ul className={styles.navbar}>
                    <li className={styles.li1}>
                        <Link href="/">
                            <a>Luke Myers </a>
                        </Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}