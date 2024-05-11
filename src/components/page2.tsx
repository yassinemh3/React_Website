import Aos from 'aos';
import {useEffect} from 'react'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import './Home.css'
import './page2.css'
import './Home'
import Footer from './Footer';
function Page2() {
    useEffect(()=>{Aos.init();},[])
  return (
<section className="body2">
    <div className="navBar">
      <nav id='Nav'>
      <ul>
      <Link className="navtxt" to='/home' >Acceuille</Link>
      <Link className="navtxt" to='/page2'style={{left: '890px', top: '60px',}}>Services</Link>
      <Link className="navtxt" to='/home#about'  style={{left: '1010px', top: '60px',}}>About us</Link>
      <Link className="navtxt" to='/home#contact' style={{left: '1130px', top: '60px',}}>Contact</Link></ul></nav>
      <button className="Tel">  
          <div className="circle"></div> 
          <div className="Nr">+(216) 26226651</div>
      </button>
      <div className="logo"></div>
    </div>
  <p className="title">Nos Services</p>
  <div  className="BlackBox"></div>
  <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-once='true' className="YellowBox">
            <div className="iconComp" style={{background: 'url(/images/bars.png), rgba(211, 211, 211, 0) 50% / cover no-repeat', backgroundSize:'100% 100%', marginLeft:'220px'}}></div>
            <p className="Whitep" style={{fontSize:'15px', width:'370px',height:'650px',marginLeft:'220px',marginTop:'-25px'}}> 
            <span style={{fontSize:'25px', fontWeight:'700',marginLeft:'40px'}}>Services Fiscaux</span><br />
            Voici une liste non exhaustive de nos compétences :<br />
            ● Conseils fiscaux notamment dans le but d’optimalisation<br />
            ● Toutes les formalités et obligations TVA : déclarations TVA, déclarations intrastat et déclarations intracommunautaires <br />
            ● L’établissement des déclarations à l’impôt des sociétés, des personnes physiques, à l’impôt des non résidents, à l’impôt des personnes morales <br />
            ● La rédaction de liasses fiscales<br />
            ● L'établissement de déclarations aux précomptes (précompte professionnel, précompte mobilier, etc.)<br />
            ● Etablissement des fiches et relevés fiscaux (principalement 281/325.20 et .50)<br />
            ● Le calcul des versements anticipés <br />
            ● L'optimalisation fiscale de votre statut d'indépendant et de votre entreprise<br />
            ● Le conseil en matière de succession<br />
            ● La rédaction de réponses aux demandes de renseignements des administrations fiscales, aux avis de rectification et aux taxations d´office<br />
            ● Introduction et suivi des réclamations en matières fiscales auprès de l'administration<br />
            ● L'assistance dans le cadre de contrôles fiscaux<br />
    </p>
  </div>
  <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-once='true' className="WhiteBox">
         <div className="iconComp" style={{background: 'url(/images/portfolio.png), rgba(211, 211, 211, 0) 50% / cover no-repeat', backgroundSize:'100% 100%', marginLeft:'20px'}}></div>
         <p className="Whitep" style={{marginTop:'-25px'}}>
            <span style={{fontSize:'25px', fontWeight:'700',marginLeft:'40px'}}>Services Comptables</span><br />
            le Bureau Comptable & Fiscal peut vous assister dans :<br />
            ●  L'assistance à l’installation d’un indépendant en personne physique<br />
            ●  L'assistance lors de la création de votre société<br />
            ● L'accompagnement dans l’élaboration d'un plan financier<br />
            ●  La tenue de la comptabilité<br />
            ●  La rédaction de situations périodiques provisoires<br />
            ●  L'établissement de situations intermédiaires et reportings pour les filiales belges de sociétés étrangères<br />
            ● L’établissement de comptes annuels <br />
            ●  L'encadrement des services comptables<br />
            ● La vérification de la comptabilité<br />
            ●  La consolidation de comptes <br />
            ●  Avis et Conseils en matières comptables.<br />
    </p>
  </div> 
  <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-once='true'className="YellowBox" style={{top:'1470px', height:'500px'}}>
    <div className="iconComp" style={{background: 'url(/images/finance1.png), rgba(211, 211, 211, 0) 50% / cover no-repeat', backgroundSize:'100% 100%', marginLeft:'220px'}}></div>
    <p className="Whitep" style={{fontSize:'15px', width:'370px',height:'650px',marginLeft:'220px',marginTop:'-30px'}}>
         <span style={{fontSize:'25px', fontWeight:'700', marginLeft:'40px'}}>Support de Gestion</span><br />
            Dans le cadre de l'évolution de votre activité, le Bureau Comptable & Fiscal reste à vos côtés afin de soutenir votre succès :<br />
            ● L'assistance à la rédaction de plans financiers<br />
            ● La définition des objectifs à venir en matière de rentabilité<br />
            ● L'établissement de tableaux de trésorerie<br />
            ● L'aide à l'obtention de subsides à l'investissement<br />
            ● L'élaboration de budget prévisionnel<br />
            ● Conseillé privilégié de votre banquier<br />
            ● Analyse financière des états financiers.</p>
  </div>
 <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-once='true' className="WhiteBox1" id='administratif'>
            <div className="iconComp"></div>
            <p className="Whitep" style={{marginTop:'-30px'}}>
            <span style={{fontSize:'25px', fontWeight:'700', marginLeft:'40px'}}>Services Administratifs</span> <br />
            Pour les clients pour lesquels le Bureau Comptable & Fiscal tient la comptabilité, <br />
            ● nous pouvons également proposer nos services dans le cadre de :<br />
            ● L’établissement des documents sociaux liés à la vie des entreprises <br />
            ● Les démarches auprès de la Banque Carrefour <br />
            ​● Toutes les formalités au niveau des publications auprès du Moniteur belge <br />
            ● La restructuration de sociétés.<br />
        </p></div>

 <p className="title1">Nos Expertises</p>
 <div className="WhiteBox2"></div>
 <div className="BlackBox2"data-aos="fade-up-left" data-aos-duration="1000" style={{width:'580px'}}>
            <div className="icondigital"></div>
            <p className="Whitep" style={{color:'white',marginLeft:'130px',marginTop:'-53px'}}>
            <span style={{fontSize:'25px', fontWeight:'700', marginLeft:'35px',lineHeight:'80px',color:'white'}} >Digital et performance</span><br />
            Accès Online 24h/24h à votre dossier avec Dashboard/Tableau de bord personnalisés et détaillé de votre activité.<br />
            Numérisation complète de votre dossier comptable.
 </p>
 </div>
 <div className="YellowBox2" data-aos="fade-up-right" data-aos-duration="1000">
            <div className="iconComp" style={{background: 'url(/images/seo.png), rgba(211, 211, 211, 0) 50% / cover no-repeat', backgroundSize:'100% 100%',marginTop:'40px', marginLeft:'30px'}}></div>  
            <p className="Whitep" style={{marginTop:'-50px'}}> <span style={{fontSize:'25px', fontWeight:'700', marginLeft:'40px',lineHeight:'80px'}} >Stratégie et vision </span><br /> 
            Que vous soyez une entreprise, un indépendant ou un particulier, le Bureau Comptable & Fiscal vous accompagne dans l'élaboration de votre stratégie.<br /> <br />
            Vision en adéquation avec l'environnement juridique et fiscal en constante évolution</p>
 </div> 
 <div className="BlackBox2" data-aos="fade-up-left" data-aos-duration="1000" style={{background:'#FFCC4A', top:'2700px',height:'400px',width:'580px',marginLeft:'20px'}}>
            <div className="iconrelation"></div>
            <p className="Whitep" style={{marginLeft:'100px',marginTop:'-55px'}}> 
            <span style={{fontSize:'25px', fontWeight:'700', marginLeft:'40px',lineHeight:'80px'}} > Relation sur mesure</span><br />
            Nous accordons énormément d'importance à l'accompagnement et au suivi personnalisé de votre dossier. <br /> 
            Marie Vander Elst et Frederik Becher s'engagent à être vos interlocuteurs uniques.</p>
            </div>
 <div className="YellowBox2" data-aos="fade-up-right" data-aos-duration="1000" style={{background:'black', top:'2650px'}}>
            <div className="iconcreation"></div>
            <p className="Whitep" style={{color:'white',marginLeft:'40px',marginTop:'-30px'}}>
            <span style={{fontSize:'25px', fontWeight:'700', marginLeft:'40px',color:'white'}} >  Création et Transformation des organisations</span><br /><br />
            Le Bureau Comptable & Fiscal est à vos côtés dans toutes les étapes de votre activité. De la création à la liquidation en passant par l'évolution, la <br />
            transformation et la consolidation de votre structure
            </p></div>
 <div className="footer2">
    <Footer></Footer></div>
</section>
  )
}

export default Page2