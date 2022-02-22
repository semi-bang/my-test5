import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const CardView = ({movie}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.overview.slice(0, 100)} ...
                </Card.Text>
                <Link to={"/" + movie.id}>
                    <Button variant="primary">자세히 보기</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default CardView;