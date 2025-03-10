import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config({ path: './.env' }); // Ensures .env is loaded correctly

// Creating a server
const app = express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is started on ${PORT}`));
