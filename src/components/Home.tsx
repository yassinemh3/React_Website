import './Home.css'
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';
import Map from './map';
import Box from './BBox';
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
const Type = () => {
 
  return (
    <TypeAnimation
      sequence={[
       1500,
        'Cabinet de Comptabilite'
      ]}
      wrapper="span"
      style={{color: '#000',
      fontFamily: 'Lato, Arial, Helvetica, sans-serif',
      fontSize: '50px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '50px',
      left: '44px',
      top: '40px',
      position: 'relative',
      wordBreak: 'break-word',
      flexWrap: 'nowrap',
      whiteSpace: 'pre-wrap',}}
      speed={28}
      repeat={0}
    />
  );
};
const Home = () => { 
 
  const pageStyles = {
    max_width: '100%',
    height: '910px',
    background: 'url(/images/bg1.jpg), lightgray 50% ',
    backgroundSize: '100% 100%', // or '100% auto' to maintain aspect ratio
    backgroundRepeat: 'no-repeat',
    
  };
  
  return (<section className="body">
  <Box/>
<section style={pageStyles} id='home'>
  <div className="navBar">
      <nav id='Nav'>
        <ul>
      <Link className="navtxt" to='/home' >Acceuille</Link>
      <Link className="navtxt" to='/page2'style={{left: '890px', top: '60px',}}>Services</Link>
      <a className="navtxt" href='#about' style={{left: '1010px', top: '60px',}}>About us</a>
      <a className="navtxt" href='#contact' style={{left: '1130px', top: '60px',}}>Contact</a></ul></nav>
      <button className="Tel">  
          <div className="circle"></div> 
          <div className="Nr">+(216) 26226651</div>
      </button>
      <div className="logo"></div>
      
  </div>
  <div className="Wbox">
    <Type />
    <p className="pr2">Le Cabinet , est une firme 
    d’expertise comptable. Avec plus de 20 ans d’expérience 
    dans le domaine, Expert Comptable Fondateur, 
    Membre de l’Ordre des Experts Comptables de Tunisie.</p>
    <button className="BtnS">Nos Services</button>
    <button className="BtnC">
      <p className="pr3">Rendez-Vous</p>
      <div className="Cicon"></div>
    </button>
  </div></section>
  <About/>
  <Service/>
  <Contact/>
  <Map/>
  <Footer/>
</section>
  );
};

export default Home;
