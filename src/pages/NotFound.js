import React from 'react'
import { useHistory } from 'react-router'
import './NotFound.css'

const NotFound = () => { 
    
    let history = useHistory();

    const goBack = () => {
        history.goBack()
    }
    const goHome = () => {
        history.push('/')
    }

    return (
        <>
            <h1>404 Error Page</h1>
            <p class="zoom-area"><b>존재하지 않는 페이지 입니다.</b>  </p>
            <section class="error-container">
            <span class="four"><span class="screen-reader-text">4</span></span>
            <span class="zero"><span class="screen-reader-text">0</span></span>
            <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
            <button target="_blank" onClick={goBack} class="more-link">이전 페이지로 돌아가기</button>
            <button target="_blank" onClick={goHome} class="more-link">홈으로 돌아가기</button>
            </div>
        </>
    )
}

export default NotFound

