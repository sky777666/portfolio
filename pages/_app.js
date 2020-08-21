import '../styles/globals.css'
import styles from '../components/navbar.module.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp




  
