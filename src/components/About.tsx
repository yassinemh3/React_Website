import './About.css'
import {useEffect} from 'react'
// import ScrollAnimation from 'react-animate-on-scroll';
// import './animation.css' ;
import Aos from 'aos';
import 'aos/dist/aos.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const About = () => {
  useEffect(()=>{Aos.init();},[])
    return (
      <section className="bodyA" id='about'>
        <button data-aos="fade-up" data-aos-duration="1000"  className="Btn">About Us</button>
        <p data-aos="fade-up" data-aos-duration="1000"  className="p1">Votre Partenaire <br /> Expert en Tunisie.</p>
        <p  data-aos="fade-up" data-aos-duration="1000" className="p2">We create experiences and build products that make business grow. We focus on presentation content and strategy
          that are guaranteed to move the audience to action, We help in improving style.</p>
        <div className="lineh"></div>
        <div className="lineh" style={{ top: '420px', }}></div>
        <div className="linev"></div>
        <div  className="box">
          <p className="boxp">
            <CountUp start={0} end={20} delay={0} duration={2}>{({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>)}
            </CountUp>
            <span className="boxp" style={{ fontSize: '30px', top: '2px', left: '46px' }}>ans</span><span className="boxp" style={{ top: '2px', left: '95px' }}>+</span>
            <p className="boxp1">experience</p><div className="star"></div>
          </p>
        </div>
        <div className="box" style={{ left: '400px', top: '128px' }}>
          <p className="boxp" style={{ left: '75px' }}><CountUp start={0} end={1500} delay={0} duration={2}>{({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>)}
          </CountUp>+
          </p>
          <p className="boxp1" style={{ left: '75px', top: '47px' }}>Dossier</p><div className="file"></div></div>

        <div data-aos="fade-up-left"  data-aos-duration="1000" className="bgimg"></div>
        <button className="plus"><a className="plusp">En Savoir Plus</a></button>

      </section>

    );
    

};
export default About;

          

        