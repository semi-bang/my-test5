// import logo from './logo.svg';
// import './App.css';
//
// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Hi my nams is SEMI!!</h1>
// //     </div>
// //   );
// // }
//
// //라이브러리를 불러오는 자리
// import React, {useState, useEffect} from 'react';
// import axios from "axios";
// import {Container, Row, Col, Card, Button} from 'react-bootstrap';
// import CardView from "./components/CardView";
// //import boot from 'react-bootstrap'; 전체 bootstrap 요소 가져오기
//
// const App = () => {
//     //상태, 변수 , 상수, 함수들이 들어가는 자리
//     //hook => state, effect
//
//     const [movies, setMovies] = useState([])
//    
//     //네트워킹 및 파싱 기능을 하는 함수 생성
//     const getMovies = async () => { //aysnc 비동기 방식
//         console.log("getMovies")
//
//         //실질적인 네트워킹, 자바스크립트문에서 try가 우선순위 - 에러발생되면 catch,
//         try {
//             const { data } = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1") //async가 있으면 await가 꼭 있어야함 -> get ,post, put 사용할 수 있음
//
//             setMovies(data.results)
//
//             console.log("********",data)
//         }catch (err) {
//
//         }
//     }
//
//     useEffect( () => {
//         getMovies()
//     }, [])
//
//     //브라우저에서 보여지는 부분 html, 자바스크립트는 {}
//         return (
//             <Container>
//                 <Row>
//                     {movies.map(movie => ( //하나의 데이터 샘플링을 movie라고 지정해놓음
//                         <Col>
//                             <CardView title={movie.title} overview={movie.overview} poster_path={movie.poster_path} />
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         );
// };
//
// export default App;

import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/:movieId'} element={<Detail />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;