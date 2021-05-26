import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
// import '../components/ProjectDetail.scss';
import ProjectDetailElement from '../components/ProjectDetail'
import ProjectDetailData from '../components/ProjectDetail/Data'
import SimpleReactLightbox from 'simple-react-lightbox'
import NotFound from '../pages/NotFound'

function ProjectDetail (){

    let { id } = useParams();     //파라미터값을 저장해서 변수로 만들어서 사용
    let [projectDetailData] = useState(ProjectDetailData);  //프로젝트 디테일데이터를 import해온 뒤 변수에 할당
    let isExist = false;
    var i;

    /** 프로젝트 데이터배열에서 id값이 url파라미터값과 일치하는 객체를 찾는다.
     *  해당 객채가 존재하면 isExist의 값을 true로 할당하고 index를 변수에 담아서 for문을 빠져나온다.
     * 배열에 해당 객체가 존재하지 않는다면 isExist의 값을 false로 할당한다.
    */ 
    for(i=0;ProjectDetailData.length>i; i++){
        if(ProjectDetailData[i].id === id){
            isExist = true;
            var index = i;
            break;
        }else{
            isExist = false;
        }
    }

    /** isExist가 true일 때(id가 데이터 배열에 존재할 때) : 프로젝트 디테일데이터 반환 
     *            false일 때 : 404페이지 반환
    */
    if(isExist){
        return(
            <SimpleReactLightbox>
                <div style={{margin:'0 5rem 0 5rem'}}>
                    <ProjectDetailElement key={id} {...projectDetailData[index]}/>
                </div>
            </SimpleReactLightbox>
        )
    }else{
        return(
            <NotFound/>
        )
    }
}

export default ProjectDetail;