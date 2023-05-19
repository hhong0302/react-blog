import React from 'react';
import './hero.css';
import HeroImg from '../../img/main.jpg';
import { Typewriter } from 'react-simple-typewriter';

const hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <div className="container f-flex top">
                    <div className="left top">
                        <h3>welcome</h3>
                        <h1>
                            hi I'm <span>hong</span>
                        </h1>
                        <h2>
                            
                            <span>
                                <Typewriter words={["응애 개발자","응애 Coder","킹냥이 집사"]}
                                            loop cursor cursorStyle="|"
                                            delaySpeed={1000} typeSpeed={70} deleteSpeed={50}
                                            />
                            </span>
                        </h2>
                        <p>
                            대충 글
                            대충 글
                            대충 글
                        </p>
                        <div className="hero-btn d-flex">
                            <div className="col">
                                <h4>View my SNS</h4>
                                <div className="button">
                                    <button className="btn-shadow"></button>
                                    <button className="btn-shadow"></button>
                                    <button className="btn-shadow"></button>
                                </div>
                            </div>
                            <div className="col">
                                <h4>스끼리</h4>
                                <div className="button">
                                    <button className="btn-shadow"></button>
                                    <button className="btn-shadow"></button>
                                    <button className="btn-shadow"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-img">
                            <img src={HeroImg} alt="lago" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default hero;