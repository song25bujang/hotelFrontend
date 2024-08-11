import './App.css';
import {useState} from "react";

function Header(props){
    return(
        <header>
            <h1 onClick={props.onChangeMode}>{props.title}</h1>
        </header>
    )
}
function Nav(props){
    const lis = []
    // for(let i = 0; i < props.topics.length; i++){
    //     let t = props.topics[i];
    //     let num = t.id; // 따로 저장
    //     lis.push(<li key={t.id}><a onClick={(d)=>{
    //         alert('hotel - '+num+'번');
    //     }} href={'/hotel/showOne/'+t.id}>{t.hotelname} [{t.id}] : {t.price}원</a></li>);
    // }
    let x = props.topics[props.idx];
    lis.push(<li key={props.idx}><a onClick={()=>alert('[hotel click'+props.idx+'번]')} href={'/hotel/showOne/'+props.idx}></a></li>);

    return(
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    )
}

function Article(props){
    return(
        <article>
            <h3>꽁꽁 얼어붙은 취업시장 위로</h3>
            <p>N13기 {props.name}({props.gender})학생이 걸어다닙니다.</p>
            <time dateTime="2024-08-09">2024년 08월 09일</time>
            <a href="/web-design-trends-2023">원문 보기</a>
        </article>
    )
}

function App() {
    const [mode,setMode] = useState('SUCCESS');
    const [id,setId] = useState(null);
    const topics = [
        {id:1, hotelname:"Hotel_A", price:"50000"},
        {id:2, hotelname:"Hotel_B", price:"60000"},
        {id:3, hotelname:"Hotel_C", price:"70000"},
        {id:4, hotelname:"Hotel_D", price:"80000"}
    ]
    let content = null;
    if(mode === 'SUCCESS'){
        content = [
            <Nav topics={topics}></Nav>
        ]
    }else if(mode === 'READ'){
        let title, body,idx = null;
        for(let i = 0; i<topics.length; i++){
            if(topics[i].id === id){
                // title = topics.hotelname;
                // body = topics.price;
                idx=id; //번호 tmp
            }
        }
        content = [
            <Nav num ={idx}> topics={topics} </Nav>
            // <Article name="강은석" gender="XY"></Article>,
            // <Article name="강지수" gender="XX"></Article>,
        ]
    }
    return (
        <div>
            <Header title="HOTEL RESERVATION" onChangeMode={()=> {
                setMode('READ');
                alert("click!");
            }}></Header>,
            {/*<Nav topics={topics} onChangeMode={(_id)=>{*/}
            {/*    setId(_id);*/}
            {/*}}></Nav>*/}
            {content}
        </div>
    );
}

export default App;
