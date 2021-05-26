import React, {useEffect} from 'react'
import './TechSkills.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

function TechSkills() {

    //컴포넌트가 마운트될 때 동작
    useEffect( () => {
        Aos.init({duration: 1000});
    }, [])

    return (
        
        <div className='home' id={'tech-skills'}>
            <div className='title'>Tech-Skills</div>
            <div className='skills-bar'>

                <div className='bar'>
                        <div className='info'>
                            <span>Javascript</span>
                        </div>
                        <div className='progress-line Javascript'>
                            <span></span>
                        </div>
                </div>

                <div className='bar'>
                        <div className='info'>
                            <span>PHP</span>
                        </div>
                        <div className='progress-line PHP'>
                            <span></span>
                        </div>
                </div>

                <div className='bar'>
                        <div className='info'>
                            <span>React.js</span>
                        </div>
                        <div className='progress-line Reactjs'>
                            <span></span>
                        </div>
                </div>

                <div className='bar'>
                    <div className='info'>
                        <span>HTML</span>
                    </div>
                    <div className='progress-line html'>
                        <span></span>
                    </div>
                </div>

                <div className='bar'>
                    <div className='info'>
                        <span>CSS</span>
                    </div>
                    <div className='progress-line css'>
                        <span></span>
                    </div>
                </div>

                <div className='bar'>
                    <div className='info'>
                        <span>jQuery</span>
                    </div>
                    <div className='progress-line jquery'>
                        <span></span>
                    </div>
                </div>

                <div className='bar'>
                    <div className='info'>
                        <span>MySql</span>
                    </div>
                    <div className='progress-line MySql'>
                        <span></span>
                    </div>
                </div>

                <div className='bar'>
                    <div className='info'>
                        <span>JAVA</span>
                    </div>
                    <div className='progress-line JAVA'>
                        <span></span>
                    </div>
                </div>
            </div>
                      
        </div>
    );
}

export default TechSkills;
