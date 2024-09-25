import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import locationsRoutes from './src/routers/location.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api', locationsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
