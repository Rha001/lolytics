import express from 'express';
import axios from 'axios';

const app = express();
const port = 9000;

// services
import { ApiService } from './services/lolApi.service';

const apiService = new ApiService();

app.get('/', (req, res) => {
    console.log(apiService.getSummoner());
    res.send('...');
});

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});