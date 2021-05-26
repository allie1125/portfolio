import styled, {keyframes} from 'styled-components'

export const Container = styled.div `
    display: grid;
    height: 160px;
    margin:0 0 2rem 0;
`
export const SkillBar = styled.div `
    width: 50%;
    background: #fff;
    border-radius: 10px;
    padding: 25px 30px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2); 
`

export const Bar = styled.div `
       margin: 20px 0; 

       &:first-child {
        margin-top: 0px;
        }
`

export const Info = styled.div `
    margin-bottom: 5px;
`
export const showText = keyframes `
        100% {
        opacity: 1;
    }
`
export const InfoSpan = styled.span `
    color: #59555c;
    font-size: 17px;
    font-weight: 500;
    opacity: 0;
    animation: ${showText} 0.5s 1s linear forwards;
`

export const animate = keyframes `
        100% {
            transform: scaleX(1);
    }
`

export const ProgressLine = styled.div `
    height: 10px;
    width: 100%;
    background: #f0f0f0;
    position: relative;
    transform: scaleX(0);
    transform-origin: left;
    border-radius: 10px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.05),
                0 1px rgba(255,255,255,0.8);
    animation: ${animate} 1s cubic-bezier(1,0,0.5,1) forwards;
`

export const showText2 = keyframes`
        100% {
        opacity: 1;
    }
`


// export const ContributionSpan = styled.span `
//     width: 90%;
//     left: -3%;
  
//     &:after{
//         content: "100%";
//     }
// `

// export const ContributionSpan2 = styled.span `
//     width: 90%;
//     left: -3%;

//     &:after{
//         content: "90%";
//     }
// `


export const LineSpan = styled.span `
    height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #6665ee;
  animation: ${animate} 1s 1s cubic-bezier(1,0,0.5,1) forwards;

  &:before{
    position: absolute;
    right: 0;
    top: -10px;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-top-color: #000;
    opacity: 0;
    animation: ${showText2} 0.5s 1.5s linear forwards;   
    }
    &:after{

    position: absolute;
    top: -28px;
    right: 0;
    font-weight: 500;
    background: #000;
    color: #fff;
    padding: 1px 8px;
    font-size: 12px;
    border-radius: 3px;
    opacity: 0;
    animation: ${showText2} 0.5s 1.5s linear forwards; 
    }
`

//LineSpan을 상속받은 뒤 변경할 부분은 새롭게 정의
export const PlanSpan = styled(LineSpan) `

/** index에서 바인딩한 데이터값을 가져와서 width 값부분에 할당 */
    width: ${ ({percent}) => (`${percent}`) };
    &:before{
        content:"";
    }
    &:after{
        content: ${({percent})=> (`'${percent}'`) };
    }                
`

