import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './App.css';

/*
    $('#btn').click(function(){

    });
    function a(){}
    $('#btn').click(a())
 */

function App() {
  const [food,setFood] =useState([])
  useEffect(()=>{
    axios.get('http://211.238.142.211:808/food/category.do').then((result)=>{
      setFood(result.data)
    })
  },[])
  const html = food.map((m,key)=>
    <li key={key}> {m.title}-{m.subject} </li>
  )
  // componentDidMount( 메모리에 올라간 상태 ), componentDidUpdate( 갱신이 필요함 ),
  // ?? componentDidMount 만 사용하려면 deps []가  필요함 그렇지 않으면 서버를 계속 호출
  return (
      <div>
      <ul>
        {html}
      </ul>
      </div>
      );
}

export default App;
