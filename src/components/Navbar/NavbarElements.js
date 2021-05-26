import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
  height: 80px;
  margin-top:-80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index:1;
  width:100%;
  padding :0 24px;
  max-width:1100px;
`;

export const NavLogo = styled(LinkR) `
color: ${({scrollNav}) => (scrollNav ? 'rgb(68, 68, 68)' : '#fff')};
justify-self:flex-start;
cursor:pointer;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration: none!important;
`;

export const MobileIcon = styled.div `
  display:none;

  @media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    transform:translate (-100%, 60%);
    font-size:2rem;
    cursor:pointer;
    color:rgb(68, 68, 68);
}`;

export const NavMenu = styled.ul `
  display:flex;
  align-items:center;
  list-style:none;
  text-align:center;
  margin-right:-22px;
  margin-top:auto;
  @media screen and (max-width:768px){
    display:none;
  }
`;

export const NavItem = styled.li `
  height:80px;

`;

/* react scroll */
export const NavLinks = styled(LinkS) `
  color: ${({scrollNav}) => (scrollNav ? 'rgb(68, 68, 68)' : '#fff')};
  display:flex;
  align-items:center;
  text-decoration: none!important;  
  padding:0 1rem;
  height:100%;
  cursor:pointer;

  &.active {
    font-size:16px;
    margin:0;
    font-weight:bold;
    border-bottom: 3px solid darkgray;
  }
`;

/** react router */
export const NavLinksRouter = styled(LinkR) `
    color: ${({scrollNav}) => (scrollNav ? 'rgb(68, 68, 68)' : '#fff')};
    display:flex;
    align-items:center;
    text-decoration: none!important;  
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &.active {
      font-size:16px;
      margin:0;
      font-weight:bold;
      border-bottom: 3px solid darkgray;
    }
`

export const NavBtn = styled.nav `
  display:flex;
  align-items:center;

  @media screen and (max-width:768px){
    display:none;
  }
`;

export const NavBtnLink = styled(LinkR) `
border-radius:50px;
background:#ff8f9a;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
boorder:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration: none!important;

&:hover {
  transition:all 0.2s ease-in-out;
  background:#FFB8B5;
  color:#010606;
}
`;

export const FloatingBtn = styled.div `
  position:fixed;
	width:60px;
	height:60px;
	bottom:60px;
	right:60px;
	background-color:#ff8f9a;
	color:#FFF;
	border-radius:50px;
	text-align:center;

  &:hover {
  transition:all 0.2s ease-in-out;
  background:#FFB8B5;
  color:#010606;
  cursor:pointer;

}
`