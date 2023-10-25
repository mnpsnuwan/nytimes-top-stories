import React from "react";
import { Container, Card } from 'react-bootstrap';

const NewsCard = () => {

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
                    <Card.Link href='https://www.nytimes.com/2023/10/25/us/politics/house-republicans-speaker.html' target='_blank'>
                        <Card.Img variant="top" src='https://static01.nyt.com/images/2023/10/25/multimedia/25dc-memo-jtzh/25dc-memo-jtzh-superJumbo.jpg' />
                    </Card.Link>
                    <Card.Body style={{textAlign:"center"}}>
                        <Card.Title>Next Speaker Vote Is Expected in Hours in a Leaderless House</Card.Title>
                        <Card.Text>Representative Mike Johnson of Louisiana is the fourth Republican nominee for speaker, but it’s unclear if he can win the chair after the three before him failed because of G.O.P</Card.Text>
                        <p>~ By Carl Hulse ~</p>
                        <a href='https://www.nytimes.com/2023/10/25/us/politics/house-republicans-speaker.html' target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                            Read more
                        </a>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default NewsCard;