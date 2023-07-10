import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components';
import {addCart} from '../store.js'


import {Context1} from './../App.js';

let YellowBtn = styled.button`
  background : ${props => props.bg};
  color : black;
  padding : 10px;
`

let Box = styled.div`
  background : grey;
  padding : 20px;
`

function Detail(props) {
  useContext(Context1);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let {id} = useParams();
  const photoNum = parseInt(id) + 1;
  let [visible , setVisible] = useState(true)
  let [number , setNumber] = useState(0);
  let [visible2 , setVisible2] = useState(false);
  let [tab , setTab] = useState(0);
  useEffect(()=>{
    let intId = parseInt(id);
    let watchedList = JSON.parse(localStorage.getItem('watched'));
    if(watchedList === null){
      console.log('리스트 자체가 없음')
      localStorage.setItem('watched',JSON.stringify([intId]));
    } else {
      if(watchedList.includes(intId)){
        console.log('데이터가 이미 있음')
      } else {
        console.log('없어서 추가')
        watchedList.push(intId);
        localStorage.setItem('watched',JSON.stringify(watchedList));
      }
    }
  },[]);

  useEffect(()=>{





    setTimeout(()=>{
      setVisible(false)
    },2000)
    return ()=>{

    }
  },[])
  useEffect(()=>{
    if(isNaN(number)){
      alert('숫자만 입력하세요.')
    }
  },[number])


// console.log(photoNum)
    return (
      <div className="container">
        {visible ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
        {/* <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>  
        </Box> */}
      <div className="row">
      <div className="col-md-6">
        <img src={'https://codingapple1.github.io/shop/shoes'+photoNum+'.jpg'} width="100%" />
      </div>
      {visible2 ? <div className="alert alert-warning">경고 : 숫자만 입력하세요</div> : null}
      <div>
        <input value={number} type="text" onChange={(e)=>{
          setNumber(e.target.value);
          // console.log(isNaN(e.target.value));
          // if(isNaN(e.target.value)){
          //   setVisible2(true)
          // } else {
          //   setVisible2(false);
          //   setNumber(e.target.value);
          // }
        }}></input>
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[id].content}</p>
        <p>{props.shoes[id].price}</p>
        <button className="btn btn-danger" onClick={()=>{
          dispatch(addCart({id:parseInt(id),name:props.shoes[id].content,count:1}));
          navigate('/cart');

        }}>주문하기</button> 
        {/* <Nav,. */}
      </div>
    </div>
    <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
    </Nav>
        <TabContent tab={tab}/>
  </div> )
}

function TabContent({tab}){

  let [fade , setFade] = useState();
  // let {재고} = useContext(Context1);
  
  useEffect(()=>{
    setTimeout(()=>{
      setFade('end')
    },100)
    return ()=>{
      setFade('')
    }
  },[tab])

  return (<div className={`start ${fade}`}>
    {[<div>{'내용0'}</div>,<div>내용1</div>,<div>내용2</div>][tab]}
  </div>)
}

export default Detail;