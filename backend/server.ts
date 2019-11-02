import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 9000;

// services
import { ApiService } from './services/lolApi.service';

const apiService = new ApiService();

app.route('/summoner/:region/:name')
    .get((req, res) => {
        apiService.getSummoner(req.params.region, req.params.name).then((response) => {
            res.json(response.data);
        }).catch((err) => {
            res.send(404);
        });
    });

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});