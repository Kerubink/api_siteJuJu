import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import locationsRoutes from './src/routers/location.routes.js';
import datesRoutes from './src/routers/date.routes.js';
import dateIdeasRoutes from './src/routers/dateIdeas.routes.js';
import moviesRoutes from './src/routers/movie.routes.js';
import plansRoutes from './src/routers/plans.routes.js';
import adventureStatsRoutes from './src/routers/adventureStats.routes.js';



dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/location', locationsRoutes);
app.use('/dates', datesRoutes);
app.use('/dateIdeas', dateIdeasRoutes);
app.use('/movies', moviesRoutes);
app.use('/plans', plansRoutes);
app.use('/adventureStats', adventureStatsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
