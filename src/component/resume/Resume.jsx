import React from 'react';
import './resume.css';
import Card from './Card';
import data from '../../data/api3';

const Resume = () => {
    return (
        <>
            <section className="resume" id="resume">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>I'm a newbie. But my resume...</h4>
                        <h1>My Resume</h1>
                    </div>
                </div>

                <div className="content-section mtop d-flex">
                    <ul className="container resume">
                    {
                        data.map((val,index)=>{
                            return <Card key={index}
                            category={val.category}
                            year={val.year}
                            title={val.title}
                            desc={val.desc}
                            rage={val.rage}
                            />
                        })
                    }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Resume;