import React,{useState} from 'react'
import {Box, Title, SkillsContainer, Container, Subject, Content} from './SkillsElements'
import SkillsData from './data'

const Skills = () => {

    const [SkillsDataArray] = useState(SkillsData)

    return (
        <>
            <Box id={'tech-skills'}>
                <Title>Skills</Title>
                    <SkillsContainer>
                        {
                            SkillsDataArray.map((el,i) => {
                                return(
                                    <Container key={i}>
                                        <Subject>{el.subject}</Subject>
                                        <Content>{el.content}</Content>
                                    </Container>
                                )
                            })
                        }                        
                    </SkillsContainer>
            </Box>
        </>
    )
}

export default Skills

