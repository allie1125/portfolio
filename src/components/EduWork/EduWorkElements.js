import styled from 'styled-components'

export const Container = styled.div `
    width:70%;
    margin:180px auto;

`

export const H2 = styled.h2 `
    color: #59555c;
    position:relative;
    text-align:center;
    border-bottom: 3px solid #ff8f9a;
    padding:15px 0;

    &:after {
        content:"";
        position:absolute;
        bottom:0;
        right:12px;
        widwth:67px;
        height:2px;
        color:#59555c;
    }
`

export const Accordion = styled.div `
    width:100%;
    padding:15px 5px;
    border-bottom: 2px solid lightgray;
    cursor:pointer;
    display:flex;
    align-items:center;
    
    &:hover {
        font-weight:bold;
        background-color: rgba(225,225,225,0.5);
    }
`

export const Icon = styled.div `
    margin: 0 10px 0 0;
    width: 30px;
    height:30px;
    background:url(../public/images/Logo/ajax.png) no-repeat 8px 7px #6db5ff;
    border-radius: 50%;
    float:left;
    transition: all .5s ease-in;
`

export const H5 = styled.h5 `
    font-size: 15px;
    margin:0;
    padding: 3px 0 3px 0;
    font-weight:normal;
    color:#59555c;

`

export const Panel = styled.div `
    background-color: rgba(225,225,225,0.5);
    padding: 15px 25px;
    font-size: 14px;
    text-align: justify;
    overflow: hidden;
    max-height: 300;
    transition: all .5s ease-in;

    &:active {

    }

`