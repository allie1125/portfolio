/*eslint-disable*/
import React, {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { FaBars,FaArrowUp } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
  Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem,NavLinks,NavLinksRouter,
  NavBtn,NavBtnLink,FloatingBtn } from './NavbarElements';

const TopNavbar = ({ toggle }) => {
  const [scrollNav,setscrollNav] = useState(false);
  const location = useLocation(); //사용자가 현재 머물러있는 페이지에 대한 정보를 알려주는 hooks

  //when passing any particular point, trigger
  const changeNav = () => {
      if(window.scrollY >= 80) {  //스크롤이 80px이상 내려갔을 때
        setscrollNav(true)
      }else{
        setscrollNav(false)
      }
  }

  const scrollToTabSection = (e) => {
    const tabName = e.target.innerHTML;
    switch (tabName) {
        case 'About':
            return scroll.scrollTo('730')

        case 'Portfolio':
          return scroll.scrollTo('1580')  

        case 'Tech-Skills':
          return scroll.scrollTo('2440') 

        case 'Contact':
          return scroll.scrollTo('3300') 
  
        default:
            break;
    }
  }

/** 홈이 아닌 곳에서 네비게이션을 클릭할 때, 링크를 리턴해서 페이지를 라우팅 */

  useEffect(() => {
    if(location.pathname =='/'){
      window.addEventListener('scroll',changeNav)
      // console.log('홈에서 스크롤')
    }else{
      setscrollNav(true)
      // console.log('홈이 아닌곳에서 스크롤')
    }
  }, [changeNav]) //changeNav가 작동할 때마다 effect를 실행

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{color:'gray'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>

          <NavLogo scrollNav={scrollNav} to="/" onClick={toggleHome}>Seonyoung Hong</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          {location.pathname == '/' 
          ?
          <NavMenu>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="about"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="portfolio"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="tech-skills"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Tech-Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="contact"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}              
              >Contact</NavLinks>
            </NavItem>
          </NavMenu> 
          : 
          <NavMenu>
            <NavItem>
              <NavLinksRouter to="/" style={{color:'black'}} onClick={scrollToTabSection}
              >About
              </NavLinksRouter>
            </NavItem>
            <NavItem>
            <NavLinksRouter to="/" style={{color:'black'}} onClick={scrollToTabSection}
              >Portfolio
              </NavLinksRouter>
            </NavItem>
            <NavItem>
            <NavLinksRouter to="/" style={{color:'black'}} onClick={scrollToTabSection}
              >Tech-Skills
              </NavLinksRouter>
            </NavItem>
            <NavItem>
            <NavLinksRouter to="/" style={{color:'black'}} onClick={scrollToTabSection}
              >Contact
              </NavLinksRouter>
            </NavItem>
          </NavMenu> 
          }


          
          <NavBtn>
            <NavBtnLink to="/github">GitHub</NavBtnLink>
          </NavBtn>
        
        </NavbarContainer>
      </Nav>
      <FloatingBtn onClick={toggleHome}>
        <FaArrowUp style={{height:'3.4em', width:'1.3em', color:'white'}}/>
      </FloatingBtn>
      </IconContext.Provider>
      </>
  );
};

export default TopNavbar;