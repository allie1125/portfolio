/*eslint-disable eqeqeq*/
import React from 'react'
import {useLocation} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,SidebarLinkRouter, SideBtnWrap, SidebarRoute } from './SidebarElements';


/**
 * 사용자가 홈화면을 보고 있을 경우, 사이드바 onClick시 토글함수로 페이지 스크롤하여 해당목록으로 이동
 * 홈화면이 아닌 다른 페이지에 있을 경우, 라우팅하여 페이지 이동
 */
function Sidebar({isOpen,toggle}) {

    const location = useLocation(); //사용자가 현재 머물러있는 페이지에 대한 정보를 알려주는 hooks
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

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            {location.pathname =='/'
            ?
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>Portfolio</SidebarLink>
                    <SidebarLink to="tech-skills" onClick={toggle}>Tech-Skills</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="github">github</SidebarRoute>
                    </SideBtnWrap>
            </SidebarWrapper>
            :
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkRouter to="/" style={{color:'white'}} onClick={scrollToTabSection} >About</SidebarLinkRouter>
                    <SidebarLinkRouter to="/" style={{color:'white'}} onClick={scrollToTabSection} >Portfolio</SidebarLinkRouter>
                    <SidebarLinkRouter to="/" style={{color:'white'}} onClick={scrollToTabSection} >Tech-Skills</SidebarLinkRouter>
                    <SidebarLinkRouter to="/" style={{color:'white'}} onClick={scrollToTabSection} >Contact</SidebarLinkRouter>
                </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="github">github</SidebarRoute>
                    </SideBtnWrap>
            </SidebarWrapper>
            }

            
        </SidebarContainer>
    )
}

export default Sidebar
