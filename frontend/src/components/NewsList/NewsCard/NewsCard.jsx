import React from "react";
import { Container, Card } from 'react-bootstrap';

const NewsCard = ({ story }) => {

    const firstMultimedia = (story.multimedia).map(image => image)[0];

    const style = {
        padding: '16px',
        textAlign: 'center',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        margin: '10px',
        boxSizing: 'border-box',
        cursor: 'pointer',
    }

    return (
        <>
            <Container className='p-5 d-flex flex-column align-items-center'>
                <Card className='hero-card bg-light m-100' style={style}>
                    <Card.Link href={story.url} target='_blank'>
                        <Card.Img alt={story.title} variant="top" src={firstMultimedia.url} />
                    </Card.Link>
                    <Card.Body style={{textAlign:"center"}}>
                        <Card.Title>{story.title}</Card.Title>
                        <Card.Text>{story.abstract}</Card.Text>
                        <p>~ {story.byline} ~</p>
                        <a href={story.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                            Read more
                        </a>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default NewsCard;