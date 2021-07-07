// import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Cards from '../components/cards'
import Namebox from '../components/namebox'
import Mainpage from '../components/mainpage'
import { Fade } from "react-awesome-reveal";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { FaFile } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";
import ContactUs from '../components/ContactUs'


export default function Home() {
  
  // useEffect(() => {
  //   document.body.style.backgroundColor = '#546b79'
  // })
  
  return (


    <div>
    {/* <div className={styles.container}> */}
      <Head>
        <title> Luke Myers</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Namebox />
      
      
    <section className={styles.sectionmain}> 
    </section>
    <section className={styles.sectionmain2}> 
    
        <div className={styles.iammain} >
        <Fade direction={"right"} delay={500} >
        <h2> I am a software engineer with a passion for collaborating with clients, designers, and writing scalable backend to frontend solutions in JavaScript, React.js, Node, and SQL. </h2>
       </Fade>
        </div>
    </section>
    {/* <section className={styles.section0}> 
        <h1> SKILLS</h1>
        <Skills />
    </section> */}
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
                
                
                <a href="https://www.barnesandnoble.com/w/gnostic-visions-luke-a-myers/1100379060?ean=9781462005482"className={styles.card}>
               
            <h5> BUY MY BOOK  </h5> </a> 
           

             
            <div className={styles.grid}>
              {/* <div href="" className={styles.card}> */}
                <img src="https://uploads-ssl.webflow.com/5e65945468556a46a33e9ffd/5e659454e129e11e7aca9918_city-scape-p-500x334.jpeg"></img>
                  <h1>CALIFORNIA NATIVE </h1>
                    <p className={styles.description}>I was born and raised in Santa Barbara California. I left home at the age of 17 to join the US Navy. I fought in Operation Enduring Freedom for September 11th 2001. After leaving the service I moved to the San Francisco Bay Area. I am a hard working and creative person and I fit so well into this amazing place of innovation and creation. </p>
                </div>
               
                      {/* <button> LEARN MORE </button> */}
             {/* <div>
               <a href="https://www.linkedin.com/in/luke-myers-5176022a/"className={styles.card3}> 
                 <h5> LinkedIn </h5> </a>
                </div> */}



              <div style={{
                   display: "flex",
                   flexDirection: "colum",
                   justifyContent:"space-evenly",
                   alignContent: "center",
                 }}>
             <a href="https://github.com/sky777666">
                 <FaGithub size={50} color={'white'}  />
                 </a>
            
         
             
             <a href="https://www.linkedin.com/in/luke-myers-5176022a/" >
                <FaLinkedin size={50} color={'white'}  />
             </a>
             
            
                 <a href="static/Luke Myers Resume 2020 .pdf" >
                     <FaFile size={50} color={'white'} />
                 </a>
                 {/* <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=luke.homesmart@gmail.com" target="_blank" className={styles.links}> <AiOutlineMail size={50} color={'white'} />     </a>        */}
                 </div>
               

        </main>
      </section>

                 <section>

        <div className={styles.contactForm}>
            <ContactUs />
        </div>
                 </section>
      <Cards />



      {/* <footer className={styles.footer}> */}
      <footer class= "footer">
        
         <a href="https://github.com/sky777666"
          target="_blank"
          rel="noopener noreferrer">
          &#169; Luke Myers 2020 
          <ul>
          <li>
          <div class="container2"><span class="react-logo"><span class="nucleo"></span></span></div>            
          </li>

          </ul>
          {/* <img class="logo" src="/github.svg" alt="Vercel Logo" className={styles.logo} /> */}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
          {/* <img class="logo" src="/800px-Nextjs-logo.svg.png" alt="Vercel Logo" className={styles.logo} /> */}
             
        </a>
      </footer>
    </div>
  )
}
