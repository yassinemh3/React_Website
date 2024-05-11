import ContactUs from './Form';
import'./Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';
function Contact() {
    useEffect(()=>{Aos.init();},[])
  return (
    <section className="bodyC" id='contact'>
        <button data-aos="fade-up" data-aos-duration="1000" className="boxG">rejoignez-nous</button>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC1">Contactez Nous. C'est Facile.</p>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC2">To experience our extraordinary consulting service, We request you to provide the details below for getting in touch with you as soon</p>
        <div data-aos="fade-up" data-aos-duration="1000" className="phoneicon"></div>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC3" style={{top:'170px', left:'260px', position:'relative'}}>Appellez</p>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC4" style={{top:'160px', left:'250px', position:'relative'}}>+(216) 26226651</p>
        <div data-aos="fade-up" data-aos-duration="1000" className="clockicon"></div>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC3" style={{top:'158px', left:'260px', position:'relative'}}>Lundi-Vendredi</p>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC4" style={{top:'145px', left:'260px', position:'relative'}}>8H-17H</p>
        <div data-aos="fade-up" data-aos-duration="1000" className="locicon"></div>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC3" style={{top:'130px', left:'260px', position:'relative'}}>Rue Salah Bchir 3</p>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC4" style={{top:'117px', left:'260px', position:'relative'}}>5000 Monastir</p>
        <div data-aos="fade-up" data-aos-duration="1000" className="emailicon"></div>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC3" style={{top:'95px', left:'260px', position:'relative'}}>Email</p>
        <p data-aos="fade-up" data-aos-duration="1000" className="pC4" style={{top:'80px', left:'260px', position:'relative'}}>cck@topnet.tn</p>
        <ContactUs></ContactUs>
    </section>
  )
}

export default Contact