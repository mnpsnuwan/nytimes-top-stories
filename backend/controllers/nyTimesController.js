import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;

// @desc Get top stories from NY times
// route GET api/top-stories
// @access Public
const getTopStories = async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
        );
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch data'});
    }
};

export {getTopStories}