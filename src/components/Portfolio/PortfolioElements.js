import styled from 'styled-components'

export const PortfolioContainer = styled.div `
    height:840px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#010606;

    @media screen and (max-width:1208px){
        height:1000px;
    }

    @media screen and (max-width:768px){
        height:1360px;
    }

    @media screen and (max-width:480px){
        height:1360px;
    }
`

export const PortfolioWrapper = styled.div `
    width:100%;
    max-width:1600px;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;

    @media screen and (max-width:1200px){
        grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns :1fr;
        padding:0 20px;
    }
`

export const P = styled.div `
    margin: 2rem 3rem;
    color: rgb(255,255,255);
    font-size:1.3em;
`

export const PortfolioCard = styled.div `
    background:#fff;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border-radius:10px;
    max-height:340px;
    padding:30px;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    color:black;

    @media screen and (max-width:420px){
        margin:0 auto;
        width:20em;
        &:first-child{
            width:16em;
        }
    }
    @media screen and (max-width:320px){
        width:10em;
        margin:0 auto;

        &:first-child{
            font-size:1em;
            width:10em;
        }
    }

    @media screen and (max-width:230px){
        margin:0 auto;

        &:first-child{
            font-size:.2em;
            width:2em;
        }
    }
    &:hover {
        transform:scale(1.02);
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
`

export const PortfolioIcon = styled.img `
    height:180px;
    width:22em;
    margin-bottom:10px;
    
    @media screen and (max-width:480px){
        width:12em;
    }
`

export const PortfolioH1 = styled.h1 `
    font-size:2.5rem;
    color:#fff;
    margin-bottom:64px;
    margin: .5em;

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`

export const PortfolioH2 = styled.h2 `
    font-size:1rem;
    margin-bottom:10px;
`

export const PortfolioP = styled.p `
    font-size:1rem;
    text-align:center;
`

export const BtnWrap = styled.div `
    display:flex;
    justify-content:flex-start;
    margin-top:2rem;
`