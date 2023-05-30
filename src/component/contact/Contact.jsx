import React, {useRef} from 'react';
//import {useDispatch} from 'react-redux';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();
    //const dispatch = useDispatch();
    const myid = 
    {
        SERVICE_ID : "hongGmail",
        TEMPLATE_ID : "template_wr6aaxa",
        USER_ID : "RZ-NGX7lDvYESp3r7"
    }
    const closeEmail = () => 
    {
        //dispatch({type:"CLOSE_EMAIL"});
    }
    const sendEmail = (e)=>
    {
        e.preventDefault();
        emailjs.sendForm(myid.SERVICE_ID, myid.TEMPLATE_ID,form.current,myid.USER_ID)
        .then((rs)=>
        {
            console.log(rs.text);
            alert("전송됨 ㅋㅋ");
            closeEmail();
        } , (error)=>
        {
            console.log(error.text);
            alert("실패함 ㅋㅋ");
        });
    };

    return (
        <div>
            <section className="contact" id="contact">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>Contact</h4>
                        <h1>Contact With Me</h1>
                    </div>
                    <div className="content d-flex">
                        <div className="left">
                            <div className="box btn-shadow">
                                <div className="img">
                                    <img src="images/hlo.jpg" alt="함께" />
                                </div>
                                <div className="details">
                                    <h1>연락좀 주세요 ㅎㅎ</h1>
                                    <p>어디든 달려갑니다</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="box btn-shadow">
                                <form ref={form} onSubmit={sendEmail} className='emailform'>
                                    <div className="f-flex">
                                        <div className='col-50'>
                                            <label>니 이름!</label>
                                            <input type="text" name="user_name" placeholder='이름' />
                                        </div>
                                        <div className='col-50'>
                                            <label>니 이메일!</label>
                                            <input type="text" name="user_email" placeholder='이메일' />
                                        </div>
                                    </div>
                                    <div>
                                        <textarea name="message" placeholder='하쉴 말쑴'></textarea>
                                    </div>
                                    <div className='text-center'>
                                        <button type='submit'>이메일 전송</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;