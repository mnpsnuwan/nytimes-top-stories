import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard/NewsCard';

const NewsList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        axios.get('/api/top-stories')
            .then((response) => setStories(response.data))
            .catch((error) => console.error(error));
    }, []);

    console.log(stories);

    return (
        <div className="news-list">
            {stories.map((story, index) => (
                <NewsCard key={index} story={story} />
            ))}
        </div>
    );
};

export default NewsList;