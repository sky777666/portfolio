import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Fade } from "react-awesome-reveal";

export default function mainpage() {

    

    return (
<>
        <Head>
            <title>Luke Myers </title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" href="assets/css/main.css" />
            <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
        </Head>

        {/* <!-- One --> */}
		
					{/* <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first"> */}
					<section class="projects1">
						<div class="content1">
							<h2>SkyTracker</h2>
							<p className={styles.description1}> Fullstack, Authentication, and Three API's. This web application was made to track, blog, and comment on the International Space Station. 
							The application uses three API ’s. 1) Mapbox 2) NASA ISS location api  3) The cloudinary api so users can upload  pictures. Skytracker uses Javascript, Node.js, Postgres DB with sequelize ORM. Express for routing and Axios for CRUD calls. Rendering is powered with HTML, CSS and EJS. The application presents fully functional authentication with passport for token based authorization and  Brypt  encryption. Feel free to see my GitHub or view the package.json for full list of npm packages. </p>
							<ul class="actions stacked">
								<li><a href="https://seir-skytracker.herokuapp.com/" class="button">SEE LIVE</a></li>
							</ul>
						</div>
						<div>
							<img class="box" src="https://i.imgur.com/8LW5ksh.jpg" alt=""  width="550px" height="450px"/>
						</div>
					
					</section>
				
					<hr></hr>


					<section class="projects">
        {/* <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in"> */}
						<div class="content">
							<h2>CoronaVirus Run </h2>
							<p className={styles.description1}>CoronaVirus run is a progressive runner video game made with JavaSctipt, Jqerry as well as  HTML and CSS.</p>
							<ul class="actions stacked">
								<li><a href="https://sky777666.github.io/Corona-Virus-Run---The-Game/" class="button">PLAY LIVE </a></li>
							</ul>
						</div>
						<div>
							<img class="box"  src="https://i.imgur.com/tRePgVE.jpg" width="550vw" height="450vw" alt="" />
						</div>
					</section>
				
					<hr></hr>

{/* Two  */}
<section class="projects">
{/* <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"> */}
						<div class="content2">
							<h2>Wonder List </h2>
							<p className={styles.description1}> Built with React.js in 24 hours in a team of 3 designers and 3 Developers. A Hackathon event. Wonderlist is an elegant mobile first first design which allows users to choose between a list of landmark images from around the world. They can click on the landmark button to get a location, map and information about the landmark they are viewing. They can like or dislike landmark images to make a favorite list of these places. They can collect a beautiful collection of images from around the world or they can use our app to build a visual travel bucket list of all the places in the world they want to visit and go see. Now with the help of world of beauty the world is open up to all to view and explore. </p>
							<ul class="actions stacked">
								<li><a href="https://github.com/sky777666/Hackathon2020" class="button">LEARN MORE</a></li>
							</ul>
						</div>
						<div>
							{/* <img src="https://i.imgur.com/Ztrx4Ae.jpg" width="500px" height="400px" alt="picture of a face with resume" /> */}
							<img class="box2"  src="https://i.imgur.com/xl5XJFs.png" padding="20px"/>
						</div>
					</section>



</>
    )
}