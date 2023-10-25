import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "../Loader.jsx";

const NewsList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        axios.get('/api/top-stories')
            .then((response) => setStories(response.data))
            .catch((error) => console.error(error));
    }, []);

    console.log(stories.length);

    return (
        <div className="news-list">
            {stories.map((story, index) => (
                <React.Suspense fallback={<Loader/>} key={index}>
                    <LazyNewsCard story={story} />
                </React.Suspense>
            ))}
        </div>
    );
};

const LazyNewsCard = React.lazy(() => import('./NewsCard/NewsCard.jsx'));

export default NewsList;