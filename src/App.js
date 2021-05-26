/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Reports from './pages/Reports';
import Products from './pages/Products';
import TechSkills from './components/TechSkills/TechSkills';
import ProjectDetail from './pages/ProjectDetail';
import Sidebar from './components/Sidebar'
import TopNavbar from './components/Navbar/TopNavbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'
// console.log = console.warn = console.error = () => {};

function App() {
  
  //사이드바가 열려있는 지 여부를 담은 state. 기본값 false(닫힘)
  const [isOpen, setIsOpen] = useState(false)
  
  //클릭시 사이드바 상태를 현재상태의 반대로 변경
  const toggle = () => {
      setIsOpen(!isOpen)

  }
  return (
    /** TopNavbar가 펼쳐져 있을 때, 사이드바는 닫혀있고,
     * Sidebar가 펼쳐져 있을 때, TopNavbar가 접혀있음
     */
    <div className="App">
      <Router basename="/react_portfolio">
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <TopNavbar toggle={toggle}/>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/reports' exact component={Reports}/>    
          <Route isOpen={isOpen} path='/reports/:id' component={ProjectDetail}/>    
          <Route path='/products' component={Products}/>
          <Route path='/tech-skills' component={TechSkills}/>
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}


export default App;
