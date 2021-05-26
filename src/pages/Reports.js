/*eslint-disable eqeqeq*/
import {React, useState, useEffect} from 'react'
import '../components/Project/Flexbox.css'
import ProjectData from '../components/Project/ProjectData'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Reports() {

    let [oriFlexbox] = useState(ProjectData);    //import 해온 데이터를 state에 담는다.
    let [flexbox,setFlexbox] = useState([]);    //import 해온 데이터를 state에 담는다.

    /* activeIndex state에 object를 생성하여 아래를 저장한다.
        1)현재 활성화된 객체정보와 2)각 object의 데이터    
    */
    const [activeIndex,setActiveIndex] = useState({
        activeObject:null,
        objects:[{id:1,title:'전체',type:3}, {id:2,title:'개인',type:0}, {id:3,title:'협업',type:1}]
    })

    //컴포넌트가 마운트될 때 애니메이션 실행
    useEffect( () => {
        Aos.init({duration: 1000});
    }, [])
    /* 개인/협업 프로젝트 클릭시 해당 데이터를 import 해온다.        
        개인프로젝트를 클릭하면, 개인프로젝트가 클릭되었음을 알리는 볼트체로 표시되고, 나머지는 얇은글씨
        개인프로젝트에 해당하는 카드 데이터가 나열된다.
    */

    //프로젝트 타입을 클릭했을 때 작동하는 함수
    //맵을 돌면서 클릭한 index의 값을 파라미터로 받는다.
    //activeIndex state를 deepcopy해서 activeObject를 현재 클릭한 객체로 state에 변경하여 저장한다.
    const toggleActive = (i) => {
        setActiveIndex({...activeIndex,activeObject:activeIndex.objects[i]})
        
        importData(i)
        // console.log(activeIndex.objects[i])
        // console.log('aa')
        // console.log(activeIndex.activeObject.type)
    }

    //div의 className을 할당하는 함수
    //맵을 돌며, i번째 index의 객체가 현재 activeObject에 할당된 객체와 일치할 때,
    //해당 index객체의 className을 active로 변경.
    const toggleActiveStyle = (i) => {
        if(activeIndex.objects[i] === activeIndex.activeObject){
            // console.log(activeIndex)
            return 'active'
        }else{
            return 'inactive'
        }
    }

    /* 현재 클릭한 프로젝트타입과 프로젝트데이터의 아이디를 비교해서 
        특정 id만 flexbox에 뿌리기.. 딥카피 해서 useState를 수정? 
        맵 돌면서 projectType이 클릭한타입과 일치하는 data만 배열에 담기..
        type 0: 개인프로젝트, type1: 공동프로젝트
    */
    const importData = (i) => {
        const newFlexboxArray = [];            

        oriFlexbox.map((dataEl,dataI)=>{
            // console.log(el.type)
            // console.log(activeIndex.activeObject.type)
            
            if(activeIndex.objects[i].type =='3'){  //전체클릭했을 때
                newFlexboxArray.push(dataEl)
            }else if(dataEl.type === activeIndex.objects[i].type){
                // console.log(dataEl.type)
                // console.log(activeIndex.objects[i].type)
                // console.log(activeIndex.objects[i].type)
                newFlexboxArray.push(dataEl)
                // console.log(newFlexboxArray)

                //해당데이터만 담은 배열을 리턴
            }

            return newFlexboxArray;
        }
        )
        setFlexbox(newFlexboxArray)
    }

    return (
        <div className='container'>
            <h1 className='heading'>프로젝트</h1>
                <div className='type-wrapper'>  
                    {
                        activeIndex.objects.map((el,i)=>{
                            return(<div key={i} className={toggleActiveStyle(i)} onClick={()=>{
                                toggleActive(i)
                            }} >{el.title}</div>)
                        })
                    }
                </div>
                <div className='card-wrapper'>
                    {
                        //flexbox 배열에 아무것도 담겨있지 않으면(=사용자가 타입을 클릭하지 않은 상태이면),
                        //프로젝트 데이터 전체를 뿌림 
                        flexbox.length === 0
                        ?   oriFlexbox.map((item,i)=>{
                                return(
                                    <Flexbox flexbox={oriFlexbox[i]} key={i}/>
                                )
                            })
                        //그게 아니면, flexbox 배열에 담겨진 데이터(=사용자가 클릭한 타입에 따른 데이터)를 뿌림                        
                        :
                        flexbox.map((item,i)=>{
                            return(
                                <Flexbox flexbox={flexbox[i]} key={i}/>
                            )
                        })
                    }
                </div>
        </div>
    );
}

//flexbox component
function Flexbox(props){
    return (
        <Link to = {`/reports/${props.flexbox.id}`}>
            <div data-aos="fade-left" className="card">
                <div className="card-img" style={{backgroundImage:`url('${window.location.origin+props.flexbox.imageUrl}')`}}>
                    <div className="overlay">
                        <div className="job-title">{props.flexbox.title}</div>
                        <div className="about">{props.flexbox.content}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Reports;