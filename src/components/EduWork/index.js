import {React, useState} from 'react'
import {Container,H2,Accordion,Icon,H5,Panel} from '../EduWork/EduWorkElements'
import FAQData from './Data'
import {FiMinus,FiPlus} from 'react-icons/fi'

function EduWork() {

    //질답 데이터 state에 저장
    const [FaqData] = useState(FAQData);
    //클릭한 데이터 인덱스를 state에 저장
    const [clicked,setClicked] = useState(false);

    const toggle = (i) =>{
        if(clicked === i){
            //클릭한 질문이 이미 active상태이면, 닫기
            return setClicked(null)
        }
        setClicked(i)
    }

    return (
        <>
            <Container id='experience'>
                <H2>Education & Work Experience</H2>
                {
                     FaqData.map((el,i) => {
                        return(
                            //클릭 한 질문의 답변이 보이도록하기
                            <>
                                <Accordion key={i} onClick={()=>{toggle(i)}}>
                                    <span style={{marginRight:'1.5rem'}}>{clicked === i ? <FiMinus/> : <FiPlus/>}</span>
                                    {clicked === i
                                    ?<H5 style={{fontWeight:'bold'}}>{el.question}</H5>
                                    :<H5>{el.question}</H5>
                                    }
                                    
                                </Accordion>

                                {clicked === i 
                                ?
                                (<Panel>
                                    <p style={{ whiteSpace: 'pre-wrap'}}>{el.answer}</p>
                                </Panel>) 
                                : null 
                                }                                
                            </>
                        )
                    })
                }
            </Container>
        </>
    )
}


export default EduWork
