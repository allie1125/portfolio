import emailjs from "emailjs-com";
import React from 'react';
import {TopLine,Subtitle,InfoRow,Column1,Column2,ImgWrap,Img} from '../InfoSection/InfoElements'

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_pxnubwd', 'template_u8ckje6', e.target, 'user_KiTXoBC5xsuorD0k8F31g').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container" id='contact'>
            <InfoRow >
            <Column1>
            <TopLine>Contact Me</TopLine>
            <Subtitle darkText='true'>안녕하세요. 저에게 관심이 생기셨다면, 아래 입력란에 내용을 작성하여 보내주세요. 감사합니다.</Subtitle>

            <form onSubmit={sendEmail}>
                    <div className="row pt-5">
                        <div className="col-8 form-group">
                            <input type="text" className="form-control" placeholder="성함" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2">
                            <input type="email" className="form-control" placeholder="이메일" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2">
                            <input type="text" className="form-control" placeholder="제목" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="메시지를 남겨주세요." name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3">
                            <input type="submit" className="btn btn-info" value="보내기"></input>
                        </div>
                    </div>
                </form>
                </Column1>

                <Column2>
                    <ImgWrap>
                        <Img src={window.location.origin+'/react_portfolio/images/Logo/contactMe.png'} alt='Contact Me'/>
                    </ImgWrap>
                </Column2>
                </InfoRow>
            </div>
        </div>
    )
}