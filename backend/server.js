import express from 'express';
import dotenv from 'dotenv';
import topStoriesRoutes from "./routes/topStoriesRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use('/api', topStoriesRoutes);

app.get('/', (req, res) => res.send('Server is ready!'));

app.listen(port, () => console.log(`Server started on port ${port}`));

