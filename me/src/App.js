import './App.css';
import './main.css';
import './media.css';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

function Home() {
  return (
    <>
      <div className='menu_name_disign'>
        <h1 className='menu_name' style={{color:'azure'}}>Hello</h1>
      </div>
      <animated.h1 className='main_me'>INTRODUCE ME<br />
        <span className='main_name_span'>
          FROM ON NOW
        </span>
      </animated.h1>
      <div className='main_images' />
    </>
  )
}

function Mylife() {
  return (
    <>
      <div className='menu_name_disign'>
        <p className='menu_name_block1'></p>
        <p className='menu_name_block2'></p>
        <p className='menu_name_block3'></p>
        <h1 className='menu_name'>My Life</h1>
      </div>
      <h2 className='My-Life_birth'>2005 / 08 / 31 ~ Now</h2>
      <p className='left'>It's Me</p>
      <ul className='My-Life_ul'>
          <li className='My-Life_li'>
            <h2 className='My-Life_li_h2'>버킷리스트</h2>
            <div className='My-Life_li_hover' style={{paddingTop:'70px'}}>
              <p className='My-Life_li_p'>1. 고등학교 재학 중에 취업</p>
              <p className='My-Life_li_p'>2. 웹 디자인 기능사 취득</p>
              <p className='My-Life_li_p'>3. 키 170 달성하기</p>
            </div>
          </li>

          <li className='My-Life_li'>
            <h2 className='My-Life_li_h2'>자격증</h2>
            <div className='My-Life_li_hover' style={{paddingTop:'70px'}}>
              <p className='My-Life_li_p'>1. 컴퓨터 활용능력 2급</p>
              <p className='My-Life_li_p'>2. 정보처리기능사</p>
            </div>
          </li>

          <li className='My-Life_li'>
            <h2 className='My-Life_li_h2'>좋아하는 언어</h2>
            <div className='My-Life_li_hover' style={{paddingTop:'70px'}}>
              <p className='My-Life_li_p'>1. html</p>
              <p className='My-Life_li_p'>2. css</p>
              <p className='My-Life_li_p'>3. javascript</p>
              <p className='My-Life_li_p'>4. react</p>
            </div>
          </li>

          <li className='My-Life_li'>
            <h2 className='My-Life_li_h2'>수상내역</h2>
            <div className='My-Life_li_hover' style={{paddingTop:'70px'}}>
              <p className='My-Life_li_p'>1. 교과우수상 디자인일반<br />(2학년 1학기)<br />(2학년 2학기)</p>
            </div>
          </li>

          <li className='My-Life_li'>
            <h2 className='My-Life_li_h2'>모교</h2>
            <div className='My-Life_li_hover' style={{paddingTop:'70px'}}>
              <p className='My-Life_li_p'>1. 삼가초등학교</p>
              <p className='My-Life_li_p'>2. 용신중학교</p>
              <p className='My-Life_li_p'>3. 수원정보과학고등학교</p>
            </div>
          </li>

          <li className='My-Life_li'>
            <h2 className='My-Life_li_h2'>가족</h2>
            <div className='My-Life_li_hover' style={{paddingTop:'70px'}}>
              <p className='My-Life_li_p'>어머니</p>
              <p className='My-Life_li_p'>아버지</p>
              <p className='My-Life_li_p'>남동생 1명</p>
            </div>
          </li>

          <li className='My-Life_li'>
            <h2 className='My-Life_li_h2'>취미</h2>
            <div className='My-Life_li_hover' style={{paddingTop:'70px'}}>
              <p className='My-Life_li_p'>1. 게임</p>
              <p className='My-Life_li_p'>2. 영화 감상</p>
              <p className='My-Life_li_p'>3. 간단한 html 작성</p>
            </div>
          </li>
      </ul>
    </>
  )
}

function Contact() {
  return (
    <>
      <div className='menu_name_disign'>
        <p className='menu_name_block1'></p>
        <p className='menu_name_block2'></p>
        <p className='menu_name_block3'></p>
        <h1 className='menu_name'>Contact</h1>
      </div>
      <ul className='Contact_ul'>
        <li className='Contact_li'><span className='Contact_span'>tel</span> : 010-4812-6901</li>
        <li className='Contact_li'><span className='Contact_span'>email</span> : jiseop831@gmail.com</li>
        <li className='Contact_li'><span className='Contact_span'>Address</span> : 경기도 수원시 영통구 매탄동 산남로 90번길 5 301호</li>
        <li className='Contact_li'><span className='Contact_span'>Github_Address</span> : <Link to={"https://github.com/Jiseop0831"} target='_blank' className='Contact_git Link'>https://github.com/Jiseop0831</Link></li>
      </ul>
      <Link to={"https://map.naver.com/v5/search/%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%82%B0%EB%82%A8%EB%A1%9C%2090%EB%B2%88%EA%B8%B8%205%20301%ED%98%B8/address/14143126.254890222,4476944.939693954,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%82%B0%EB%82%A8%EB%A1%9C90%EB%B2%88%EA%B8%B8%205,new?c=19,0,0,0,dh&isCorrectAnswer=true"} target='_blank' className='left Link'>Take a Map</Link>
      <div className='Contact_maps' />
    </>
  )

}

function Others() {
  return (
    <>
      <div className='menu_name_disign'>
        <p className='menu_name_block1'></p>
        <p className='menu_name_block2'></p>
        <p className='menu_name_block3'></p>
        <h1 className='menu_name'>Others</h1>
      </div>
      <ul className='Others_ul'>
        <li className='Others_li'><span className='Others_span'>tel</span> : 010-4812-6901</li>
        <li className='Others_li'><span className='Others_span'>The language used in the production</span> : react (html, css, javascript)</li>
        <li className='Others_li'><span className='Others_span'>Sources of the photo</span> : Google</li>
      </ul>
      <p className='left l_Others'> Solo Portfolio</p>
      <div className='Others_portfolio'>

        <Link className='Others_portfolio_school center Link' to={"https://github.com/Jiseop0831/school_welcome"} target='_blank'>
          <div className='Others_portfolio_school_img'></div>
          <p className='Others_portfolio_school_p'>학교 수업시간에 <br/>만든 우리학교 학과<br/>소개 사이트!<br/>(html, css)</p>
        </Link>

        <Link className='Others_portfolio_timesite center Link' to={"https://github.com/Jiseop0831/timesite-app"} target='_blank'>
          <div className='Others_portfolio_timesite_img'></div>
          <p className='Others_portfolio_timesite_p'>처음으로 리액트로 만들어낸<br/> 실시간 시계 사이트!!<br/>(react, js, css)</p>
        </Link>

        <Link className='Others_portfolio_portfolio center Link' to={"https://github.com/Jiseop0831/potpolio_me"} target='_blank'>
          <div className='Others_portfolio_portfolio_img'></div>
          <p className='Others_portfolio_portfolio_p'>내가 만든, 혹은 만들 프로젝트 들을 모아놓은<br/>나만의 포트폴리오 사이트!<br/>(html, css, js)</p>
        </Link>

      </div>
    </>
  )

}

function Main() {
    let [slidemenu, setslide] = useState(false);

    const {bottom,transform} = useSpring({
      bottom: slidemenu ? '0%' : '100%',
      transform: `rotate(${slidemenu ? 360 : 0}deg)`
    })

    let navigate = useNavigate();

    return (
      <div className='MAIN' style={{overflow:"hidden"}}>
        <div>
          <animated.button className='main_menu' id='not' onClick={() => setslide(state => !state)} style={{transform}}>
            ☰
          </animated.button>
          <animated.div className='menu_visual' style={{bottom}}>
            <ul className='menu_ul'>
              <li><Nav.Link onClick={() => {navigate('/Home')}} className='menu_li'>Home</Nav.Link></li>
              <li><Nav.Link onClick={() => {navigate('/Mylife')}} className='menu_li'>My Life</Nav.Link></li>
              <li><Nav.Link onClick={() => {navigate('/Contact')}} className='menu_li'>Contact</Nav.Link></li>
              <li><Nav.Link onClick={() => {navigate('/Others')}} className='menu_li'>Others</Nav.Link></li>
            </ul>
          </animated.div>
        </div>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Mylife' element={<Mylife />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Others' element={<Others />} />
        </Routes>
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}


export default App;