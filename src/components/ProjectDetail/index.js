
import React from 'react'
import {ProjDetailContainer,ProjectTitle,ProjectLogo,ProjectText,SummaryContainer,ContributionSkillContainer,SubContainer,SubContainer2,TextContainer,Title,Text,LinkText,
    MainFunction,CardContainer,CardImage,Explanation,Tech,TechCardContainer,TechCardImage,PlayerContainer,LessonImgContainer,LessonImg} from './ProjectDetailElements'
import { SRLWrapper } from 'simple-react-lightbox'
import ContributionBar from '../ContributionBar'
import ReactPlayer from 'react-player'
import { FcList,FcLink,FcIdea,FcSearch,FcStart,FcServices } from "react-icons/fc";

const ProjectDetailElement = ({id,projectTitle,summary,logo,domainLink,allFunction,mainFunction,skillSet,videoUrl,lesson,lessonImg}) => {
    return (
        <>
         <ProjDetailContainer id={id}>
            
            <ProjectTitle>
                <ProjectLogo src={window.location.origin+logo}/>
                <ProjectText>{projectTitle}</ProjectText> 
            </ProjectTitle>

            <SummaryContainer>
                <Text style={{whiteSpace:"pre-wrap"}}>{summary}</Text>
            </SummaryContainer>

            {
                /** data의 domainLink가 null일 경우, 컴포넌트null
                                        null이 아닐 경우 컴포넌트 프린트 
                */
                domainLink===null
                ?null
                :            
                <TextContainer>
                    <Title><FcLink /> 프로젝트 링크</Title>
                    <LinkText><a onClick={()=>{window.open(`${domainLink}`,'_blank')}}>{domainLink}</a></LinkText>
                </TextContainer>
            }

            <ContributionSkillContainer>
                <SubContainer>
                    <Title ><FcList style={{width:'5%', height:'1em'}} />기능</Title>
                    <SubContainer2>
                        {allFunction.map((el,i)=>{
                            return(
                                <li key={i}>{el}</li>
                            )
                        })}
                    </SubContainer2>
                </SubContainer>

                <SubContainer>
                    <Title><FcIdea style={{width:'5%', height:'1em'}}/>기여도</Title>
                    <ContributionBar id={id}/>
                </SubContainer>
            </ContributionSkillContainer>
            


            <Title><FcServices /> 서버,언어 및 라이브러리</Title>
            <Tech>
                {
                    skillSet.map((el,i)=>{
                        return(
                            <TechCardContainer key={i}>
                                <Explanation style={{textAlign: 'center', fontSize:'1rem'}}>{el.explanation}</Explanation>
                                <TechCardImage 
                                    style={{backgroundImage: `url("${window.location.origin+el.img}")`}}
                                />
                            </TechCardContainer>
                        )
                    })
                }
            </Tech>

            {
                mainFunction === null
                ?null
                :
                <>
                    <Title><FcSearch /> 주요기능 (클릭 시 이미지 확대)</Title>
                    <SRLWrapper>
                        <MainFunction>
                            {
                                mainFunction.map((el,i)=>{
                                    return(
                                        <CardContainer key={i}>
                                            <a href={window.location.origin+el.img} style={{width: '25rem'}}>                        
                                                <CardImage id={id} src={window.location.origin+el.img}/>
                                            </a>
                                            <Explanation >{el.explanation}</Explanation>                                
                                        </CardContainer>
                                    )
                                })
                            }
                        </MainFunction>
                    </SRLWrapper> 
                </>
            }

            <p></p>
            <Title style={{textAlign:'center', marginTop:'2rem'}}><FcStart/> 시연 영상</Title>
            <PlayerContainer>
                <ReactPlayer 
                width='100%'
                height='100%'
                controls 
                url={videoUrl}
                onError={()=>console.log('onError callback')}
                />
            </PlayerContainer>

            <Title> 프로젝트를 진행하며 어려웠던 부분 및 깨달은 점</Title>
            <SummaryContainer>
            <Text style={{ whiteSpace: 'pre-wrap'}}>{lesson}</Text>
            </SummaryContainer>

            {
                lessonImg === null
                ?null
                :
                lessonImg.map((el,i) => {

                    return(
                        <LessonImgContainer  key={i}>
                            <LessonImg src={window.location.origin+lessonImg[i]}/>                    
                        </LessonImgContainer>
                    )
                })            
            }

         </ProjDetailContainer>   
        </>
    )
}

export default ProjectDetailElement
                                                        