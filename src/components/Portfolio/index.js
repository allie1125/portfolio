import React from 'react'
import { Link } from 'react-router-dom';
import Icon1 from '../../images/foodtruck_main.JPG'
import Icon2 from '../../images/mycloset_main.jpg'
import Icon3 from '../../images/summerfarm.JPG'
import {Button} from '../Button/ButtonElement'
import { PortfolioContainer,PortfolioWrapper,PortfolioCard,PortfolioIcon,PortfolioH1,P,PortfolioH2,PortfolioP, BtnWrap} from './PortfolioElements'


const Portfolio = (primary,dark,dark2) => {
    return (
        <PortfolioContainer id="portfolio">
            <PortfolioH1>프로젝트</PortfolioH1>
            <P>프로젝트를 클릭하여 상세설명 및 시연영상을 확인할 수 있습니다.</P>
            <PortfolioWrapper>

                <Link to={`/reports/0`} >
                    <PortfolioCard>
                        <PortfolioIcon src={Icon1}/>
                        <PortfolioH2>웹 프로젝트</PortfolioH2>
                        <PortfolioP>푸드트럭 위치 알림 사이트</PortfolioP>
                    </PortfolioCard>
                </Link>

                <Link to={`/reports/1`}>
                    <PortfolioCard>
                        <PortfolioIcon src={Icon2} style={{width:'10em'}}/>
                        <PortfolioH2>안드로이드 프로젝트</PortfolioH2>
                        <PortfolioP>착장 업로드 앱</PortfolioP>
                    </PortfolioCard>
                </Link>

                <Link to={`/reports/3`}>
                    <PortfolioCard>
                        <PortfolioIcon src={Icon3}/>
                        <PortfolioH2>자바 프로젝트</PortfolioH2>
                        <PortfolioP>이클립스 콘솔로 만든 프로젝트</PortfolioP>
                    </PortfolioCard>
                </Link>

            </PortfolioWrapper>

                    <BtnWrap>
                            <Button 
                                to='/reports'
                                // smooth={true}
                                // duration={500}
                                // spy={true}
                                // exact="true"
                                // offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1 : 0}
                                >자세히보기            
                            </Button>
                    </BtnWrap>
            </PortfolioContainer>
    )
}

export default Portfolio
