import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Cards from '../components/cards'
import Namebox from '../components/namebox'
import Mainpage from '../components/mainpage'


export default function Home() {
  return (
    <div>
    {/* <div className={styles.container}> */}
      <Head>
        <title> Luke Myers</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Namebox />
      

    <section className={styles.sectionmain}> </section>
    <section className={styles.sectionmain2}> 
        <div className={styles.iammain} >
        <h2> I am a software engineer with a passion for collaborating with clients, designers, and writing scalable backend to frontend solutions in JavaScript, React.js, Express, and SQL. </h2>
        </div>
    </section>
    {/* <section className={styles.sectionmain3}> <div class="button2"><p> MY PROJECTS </p></div> </section> */}
    <section className={styles.sectionmain3}> 
    <h2 className={styles.myprojectsname}> MY PROJECTS </h2> </section>
    <hr></hr>
    <Mainpage />

    <hr></hr>
    
    <section className={styles.about}>
        <main className={styles.main}>
          <h1 className={styles.title}>
             <div href="">ABOUT ME </div>
          </h1>
          <ul>
            <li></li>
            <li></li>
          </ul>
            <p className={styles.description}> This is some information about me. Take a look inside. </p>
              <div className={styles.grid}>
                {/* <div href="" className={styles.card}> */}
                  <img className={styles.card2} src="https://uploads-ssl.webflow.com/5e65945468556a46a33e9ffd/5e659454e129e14c4cca9917_photo-1416400639808-f41f0c149b09-p-1080x721.jpeg"></img>
                     <h1> MUSIC, ART, & AUTHOR </h1>
                  <p className={styles.description}>My favorite artist is the American artist, Alex Grey. I have a passion for music and I think music video's are an amazing means of expression. I am very interested in the study of spirituality and the human mind and I am also author of the book, " Gnostic Visions."</p>
                </div>
                {/* </div> */}
                <a href="https://www.linkedin.com/in/luke-myers-5176022a/"className={styles.card}>
                <p> LEARN MORE </p>
                </a> 



             
            <div className={styles.grid}>
              {/* <div href="" className={styles.card}> */}
                <img src="https://uploads-ssl.webflow.com/5e65945468556a46a33e9ffd/5e659454e129e11e7aca9918_city-scape-p-500x334.jpeg"></img>
                  <h1>CALIFORNIA NATIVE </h1>
                    <p className={styles.description}>I was born and raised in Santa Barbara California. I left home at the age of 17 to join the US Navy. I fought in Operation Enduring Freedom for September 11th 2001. After leaving the service I moved to the San Francisco Bay Area. I am a hard working and creative person and I fit so well into this amazing place of innovation and creation. </p>
                </div>
                      {/* <button> LEARN MORE </button> */}
              {/* </div> */}
           <a href="https://www.barnesandnoble.com/w/gnostic-visions-luke-a-myers/1100379060?ean=9781462005482"className={styles.card}>
            <p> LEARN MORE </p>
          </a> 
        </main>
      </section>

      <Cards />



      <footer className={styles.footer}>
        <a
          href="https://github.com/sky777666"
          target="_blank"
          rel="noopener noreferrer">
          &#169; Luke Myers 2020 
          <ul>
          <li>
          <div class="container2"><span class="react-logo"><span class="nucleo"></span></span></div>            
          </li>

          </ul>
          <img class="logo" src="/github.svg" alt="Vercel Logo" className={styles.logo} />
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          {/* <img class="logo" src="/800px-Nextjs-logo.svg.png" alt="Vercel Logo" className={styles.logo} /> */}
             
        </a>
      </footer>
    </div>
  )
}
