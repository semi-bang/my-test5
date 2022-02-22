import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Container, Row, Col} from 'react-bootstrap';
import CardView from "../components/CardView";

const Home = () => {
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        try {
             const { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1') //async가 있으면 await가 꼭 있어야함 -> get ,post, put 사용할 수 있음
            setMovies(data.results)
        }catch (e) {
        }
    }

    useEffect( () => {
            getMovies()
         }, [])

    return (
            <Container>
                <Row>
                    {movies.map(movie => ( //하나의 데이터 샘플링을 movie라고 지정해놓음
                        <Col>
                             <CardView movie={movie} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
};

export default Home;