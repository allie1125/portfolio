import React, {useState} from 'react'


function Products() {
    //ES6 destructuring 문법
    //[10,100]; 이 데이터를 변수에 담고 싶다면?
    // => var [a,b] = [10, 100]; a변수에 10을 넣고, b변수에 100을 넣음으로써 array, object 등에 있던 자료를 변수에 쉽게 담을 수 있다.

    //state함수를 실행하면 [a,b] 함수가 남는다. a: state데이터 b: 데이터 state를 변경하는 함수
    let [title, titleChange] = useState(['1st project', '2nd project','3rd project','4th project']);
    let [like, likeChange] = useState(0);
    var [modal, modalChange] = useState(true);  
    let [clickedIndex, clickedIndexChange] = useState(0);
    let [input, inputChange] = useState('');

    function clickModal(){    
        if(modal === true){
        modalChange(false)
        }else{
        modalChange(true);
        }
    }

    return (
        <div className='products'>
            <div className="bodyContainer">

            <div className="postContainer">

            {
                title.map(function (subject, i){
                return(
                    <div className="post" key={i}>
                    <h3 onClick={ () => {clickedIndexChange(i)} }>{subject} <span onClick={ () => { likeChange(like+1) }}>🏆</span>  {like} </h3>
                    <p onClick={clickModal}>프로젝트내용</p>
                    </div>
                )
                })
            }

            <div className="publish">
                <input onChange={ (e)=>{ 
                    let inputValue = e.target.value;    //사용자의 입력값
                    console.log(inputValue)
                    inputChange(inputValue)             //입력값을 input state에 저장
                    }}/>
                <button onClick={ () => {          //저장버튼 클릭
                    //TODO: (서버에 저장할 때 ajax로 서버에 저장하는 코드 작성)
                    var titleArrayCopy = [...title]; //title state deep copy
                    titleArrayCopy.unshift(input);    //title state에 input state에 저장해둔 입력값을 추가 (unshift: 배열의 맨 앞에 추가)
                    titleChange(titleArrayCopy);     //state 변경함수에 사용자입력값을 추가한 새 배열 인자로 전달
                    
                }}>저장</button>                
            </div>

            <button onClick={ () => {modalChange(!modal)} }>열고닫기</button>
            {
                //modal의 값이 true일 때, modal창을 띄우고 아니면 안띄움
                modal === true
                ? <Modal title={title} clickedIndex = {clickedIndex}/>  //title state를 전송(props)
                : null
            }

            </div>

            </div>           
        </div>
    );

    
    //Component
    function Modal(props){  //props에는 부모에서 전달받은 props가 다 들어있다.
        return (
        <div>{props.title[props.clickedIndex]}</div>
        )
    }
}

export default Products;