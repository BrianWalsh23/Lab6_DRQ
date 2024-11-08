import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MovieItem = (props) => {
    return(
        <div>
            <Card>
                <Card.Header>{props.myMovie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.Poster}></img>
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
        );
}

export default MovieItem;