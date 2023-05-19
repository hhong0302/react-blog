import React, {useState} from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import './header.css';
import logo from '../../img/logo.jpg';

const Header = () => {
    const [mobile, setMobile] = useState(false);
    return (
        <header className='header'>
            <div className="container d-flex">
                <div className="logo">
                    <img src={logo} alt="포트폴리오" />
                </div>
                <div className="navlink">
                    <ul className={mobile?"nav-link-mobile":"link f-flex uppercase"} onClick={()=>setMobile(false)}>
                        <li><a href="#features">features</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#">menu3</a></li>
                        <li><a href="#">menu4</a></li>
                        <li><a href="#">menu5</a></li>
                        <li><button className='home-btn'>PDF DOWN</button></li>
                    </ul>
                </div>
                {/* 모바일 */}
                <button className="toggle" onClick={()=> setMobile(!mobile)}>
                    {mobile ? <RxCross1 className='close' /> : <RxHamburgerMenu className='open' />}
                </button>
            </div>
        </header>
    );
};

export default Header;