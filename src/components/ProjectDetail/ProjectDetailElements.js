import styled from 'styled-components'
import image from '../../images/foodtruckweb.jpg'

export const ProjDetailContainer = styled.div `
    max-width:1400px;
    margin:0 auto;
    margin-top:80px;
    display:flex;
    flex-direction:column;
`

export const ProjectTitle = styled.div `
    display:flex;
    flex-direction:row;
    margin-bottom:3rem;
`

export const ProjectLogo = styled.img `
    flex:10%;
    width:10px;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
`

export const ProjectText = styled.p `
    flex:90%;
    font-weight:bold;
    font-size:2rem;
    margin:auto;
`

export const TextContainer = styled.div `
    display:flex;
    flex-direction:row;
    font-size:18px;
    color:#59555c;
`

export const Title = styled.p `
    font-weight:bold;
    font-size:18px;
    color:#59555c;
    border-radius:5px;
    background-color:rgba(198,214,69,0.5);
    margin-right:1rem;
    padding:.3rem;
    margin-top:3rem;
`

export const SummaryContainer = styled.div `
    display:flex;
    flex-direction:row;
    font-size:18px;
    color:#59555c;
    font-size:1.2rem;
`

export const ContributionSkillContainer = styled.div `
    display:flex;
    flex-direction:row;

    @media screen and (max-width:1400px){
        display:block;
    }
`

export const SubContainer = styled.div `
    display:flex;
    flex-direction:column;
    flex:50%;
`

export const SubContainer2 = styled.div `
    columns: 2;
`

export const Text = styled.p `
    flex:70%;
`

export const LinkText = styled.p `
    flex:70%;
    cursor:pointer;
    margin-top:3rem;

    &:hover{
        text-decoration:underline;
        color:blue;
    }
`

export const Tech = styled.div `
    display:flex;
    flex-direction:row;    
    flex-wrap:wrap;   
`

export const TechCardContainer = styled.div `
    display:flex;
    flex-direction:column;
    height:100px;
    width:100px;
    margin: .5rem;
`
export const TechCardImage = styled.div `
    flex:80%;
    /*background-image:url(${image});*/
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
`

export const MainFunction = styled.div `
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0;

    @media screen and (max-width:1400px){
        grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width:1160px){
        grid-template-columns :1fr;
        padding:0 20px;
    } 

`

export const CardContainer = styled.div `
    display:flex;
    flex-direction:column;
    width:25rem;
    margin: .5rem;
    justify-self:center;
    text-align:center;
`

export const CardImage = styled.img `
    flex:80%;
    height:20rem;
    width: ${({id}) => (id === '1' ? 'auto' : '25rem')}; /* 모바일프로젝트와 웹프로젝트에 따라 width설정 변경 */
    /*background-image:url(${image});*/
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
`

export const Explanation = styled.p `
    flex:20%;
    margin:.5rem 0;
    text-align:center;
    width:100%;
    font-size:18px;
`

export const PlayerContainer = styled.div `
    display:flex;
    margin:0 auto;
    width:100%;
    height:40rem;
`

export const LessonImgContainer = styled.div `
    display:flex;
    flex-direction:column;
`

export const LessonImg = styled.img `
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
`