import axios from 'axios';

export class ApiService {
    static HOST: string = 'https://la1.api.riotgames.com';
    static API_KEY=process.env.API_KEY
    static ENDPOINTS = {
        summoner: '/lol/summoner/v4/summoners/by-name/'
    };

    getSummoner(sumonnerName: string) {
        return axios.get(`${ApiService.HOST }${ApiService.ENDPOINTS.summoner}${sumonnerName}?api_key=${ApiService.API_KEY}`);
    }
}