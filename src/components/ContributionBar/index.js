/*eslint-disable eqeqeq*/
import React,{useEffect}from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Container,SkillBar,Bar,Info,InfoSpan,ProgressLine,LineSpan,PlanSpan} from './ContributionElements'
import projectContributionArray from './Data'

//프로젝트 디테일 페이지로부터 프로젝트 아이디를 파라미터로 받기
const ContributionBar = (id) => {
    //컴포넌트가 마운트될 때 동작
    useEffect( () => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <>
            <Container>
                <SkillBar>
                    <Bar>
                        <Info>
                            <InfoSpan>기획</InfoSpan>
                        </Info>
                        <ProgressLine>
                            <LineSpan/>

                            {
                                //데이터로 따로 저장한 어레이를 불러와서 반복돌리며 id가 일치하는 객체를 찾는다.
                                projectContributionArray.map((el,i) => {
                                return(
                                        //id가 일치하면 percent데이터를 바인딩
                                        el.id == id.id ? <PlanSpan key={i} percent={el.plan}/> : ''
                                    )
                                })
                            }                            
                        </ProgressLine>
                    </Bar>
                    <Bar>
                        <Info>
                            <InfoSpan >개발</InfoSpan>
                        </Info>
                        <ProgressLine>
                            <LineSpan/>
                            {
                                projectContributionArray.map((el,i) => {
                                return(
                                    el.id == id.id ? <PlanSpan key={i} percent={el.dev}/> : ''
                                )
                            })
                            }                         
                        </ProgressLine>
                    </Bar>
                </SkillBar>
            </Container>
        </>
    )
}

export default ContributionBar
