import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaGithub} from 'react-icons/fa'
import {
    FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink
} from './FooterElements'

const FooterElements = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Seonyoung's Portfolio
                        </SocialLogo>
                        <WebsiteRights>Copyright {new Date().getFullYear()}. Seonyoung Hong. All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default FooterElements
