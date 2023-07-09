import {Container,Nav,Navbar,Row,Col, Card} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js';


function App() {


  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ShoeStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Link to="/detail">상세페이지</Link>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
            <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                { shoes.map((item, idx)=>{
                  return <ShoesComponent shoes={item}></ShoesComponent>
                 })}
               </div>
            </div>
            {/* <div className="main-bg">
              <div class="container">
              <Container>
              <Row>
                {shoes.map((item,idx)=>{
                  return <ShoesComponent shoes={item}/>
                })}
              </Row>
              </Container>  
              </div>
          </div> */}
           </>
        } />
        <Route path='/detail' element={<Detail />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치임</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지에요</div>}/>
      </Routes>

      

    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


function ShoesComponent({shoes}){
  return(
    <Col sm>
      <img width="80%" src={`https://codingapple1.github.io/shop/shoes${shoes.id+1}.jpg`}/>
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </Col>
  );
}




export default App;
 