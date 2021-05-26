import styled from 'styled-components'

export const Box = styled.div `

`
export const Title = styled.div `
    text-align:center;
    margin: 2rem 0;
    font-size: 2rem;
`
export const SkillsContainer = styled.div `
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin:0 8rem;
    @media screen and (max-width:1080px){
        margin:0 4rem;
    }
    @media screen and (max-width:954px){
        margin:0 3.5rem;
    }
    @media screen and (max-width:710px){
        display:inline-block;
        margin:0 2rem;
    }

`
export const Container = styled.div `
    display:flex;
    flex-direction:column;
    flex:25%;
    margin:2rem;
    height:8rem;
    color:#59555c;

    @media screen and (max-width:940px){
        font-size:.8em;
    }
    @media screen and (max-width:710px){
        height:6.5rem;

    }
    @media screen and (max-width:332px){
        font-size:.6em;
    }
`

export const Subject = styled.div `
    flex:20%;
    background-color:rgba(198,214,69,0.5);
    padding:.5em;
    font-weight:bold;
    border-radius:5px;
    font-size:1.2em;
`

export const Content = styled.div `
    flex:80%;
    padding:.5em;
    font-size:1.1em;
`