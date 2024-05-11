import './Service.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

import {useEffect} from 'react'
const Service = () => {
    const handleButtonClick = () => {
        // navigate to the /page2 link path
        window.location.href = "/page2";
      };
    useEffect(()=>{Aos.init();},[])
    return (
        <section className="bodyS" id='service'>
            <button data-aos="fade-up" data-aos-duration="1000" className="seviceB">Nos Services</button> 
            <h1 data-aos="fade-up" data-aos-duration="1000" className="pr">Get Control Over Your Business</h1>
            <button data-aos="fade-up" data-aos-duration="1000" className="box1" style={{top:'2220px',left:'220px',position:'absolute'}} onClick={handleButtonClick}>
                <div className="bgicon"></div><p className ="box1p">Comptabilité & Finance</p></button>
            <button data-aos="fade-up" data-aos-duration="1000" className="box1" style={{top:'2220px',left:'650px',position:'absolute'}} onClick={handleButtonClick}>
                 <div className="bgicon1"></div><p className="box1p">Services Fiscaux</p></button> 
            <button data-aos="fade-up" data-aos-duration="1000" className="box1" style={{top:'2220px',left:'1080px',position:'absolute'}} onClick={handleButtonClick}>
                <div className="bgicon2"></div><p className="box1p">Services Juridiques</p></button>      
            <button data-aos="fade-up" data-aos-duration="1000" className="box1" style={{top:'2535px',left:'220px',position:'absolute'}} onClick={handleButtonClick}>
                <div className="bgicon3"></div><p className="box1p">Services Administratifs</p></button>
            <button data-aos="fade-up" data-aos-duration="1000" className="box1" style={{top:'2535px',left:'650px',position:'absolute'}} onClick={handleButtonClick}>
                <div className="bgicon4"></div><p className="box1p">Services Administratifs</p></button>
            <button data-aos="fade-up" data-aos-duration="1000" className="box1" style={{top:'2535px',left:'1080px',position:'absolute'}}>
                <div className="bgicon5"></div>         
                <p className="box1p">Services Administratifs</p></button>
           
        </section>
    );};


export default Service;