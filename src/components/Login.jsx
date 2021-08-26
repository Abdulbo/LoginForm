import React , { useState , useEffect} from 'react';
import logoTwitter from "../icons/twitter.png";
import logoFacebook from "../icons/facebook.png";
import logoGoogle from "../icons/google.png";
import "../components/Login.scss"
import AOS from "aos";
import "aos/dist/aos.css";




const Login = () => {
    const[lang,setLang] = useState('en')
    let transLang = {
        uz:{
            MainTitle:'Kirish',
            inputTitleUs:"Foydalanuvchi nomi",
            inputplecleUs:"Foydalanuvchi nomini kiriting",
            inputTitlePass:"Parol",
            inputpleclePass:"Parolingizni kiriting",
            button:"Kirish",
            signTitle:"Yoki ro'yxatdan o'tish",
            signText:"Yoki yordamida ro'yxatdan o'ting",
            signText2:"RO'YXATDAN O'TISH"
        },
        en:{
            MainTitle:'Login',
            inputTitleUs:"Ussername",
            inputplecleUs:"Type Your Username",
            inputTitlePass:"Password",
            inputpleclePass:"Type Your Password",
            button:"Login",
            signTitle:"Or Sigin Up Using",
            signText:"Or Sign Up Using",
            signText2:"SIGN UP"
        }
    }
    let mainFromRef = React.useRef()

 useEffect(()=>{
        AOS.init()
})
    
    return (
        <>
      <header className="header">
      <div className="wrapper">
        <select 
        className="select" 
        defaultValue={lang}
        onChange={(evt)=>{
            setLang(evt.target.value)
            console.log(lang)
        }}

        >
              
            <option value="uz">Uzbek</option>
            <option value="en">English</option>
        </select>                 
            <input className="inputCheckbox" type="checkbox"  
                    onClick={(e) =>{
                    if(e.target.checked === true){
                        mainFromRef.current.style.backgroundColor = 'rgba(14,22,33)';
                        mainFromRef.current.style.color = '#fff'
                    }else if(e.target.checked === false){
                        mainFromRef.current.style.backgroundColor = 'rgba(255,255,255)'
                        mainFromRef.current.style.color = 'rgba(0,0,0)'
                  }
                }}
                />
        </div>
      </header>
     
        <div className="container">
            <div className="content-form " ref={mainFromRef}data-aos="zoom-in-down" data-aos-duration="1500" >
                <h1 className="Login-text">{transLang[lang].MainTitle}</h1>
                <form className="Input-form" action="#">
                    <p >{transLang[lang].inputTitleUs}</p>
                    <input className="input" type="email" placeholder={transLang[lang].inputplecleUs} />
                    <p>{transLang[lang]. inputTitlePass}</p>
                    <input className="input" type="password" placeholder={transLang[lang].   inputpleclePass} />
                    <button className="button-form">{transLang[lang].button}</button>
                </form>
                <div className="content-logo">
                    <p>{transLang[lang].signTitle}</p>
                  <span>
                  <a href="#" >

                        <img className="logo" src={logoTwitter} alt="logo-twitter" />
                     
                    </a>
                    <a href="#" >
                        <img  className="logo" src={logoFacebook} alt="logo-twitter" />
                    </a>
                    <a href="#" >
                        <img  className="logo" src={logoGoogle} alt="logo-twitter" />
                    </a>
                  </span>
                </div>
                 <span className="usingSign-wrapper">
                 <p>{transLang[lang].signText}</p>
                 <p>{transLang[lang].signText2}</p>
                 </span>
            </div>
        </div>
        </>
    );
};



export default Login;