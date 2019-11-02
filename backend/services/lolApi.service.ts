import axios from 'axios';

export class ApiService {
    static API_KEY=process.env.API_KEY;
    static HOSTS: any = {
        BR1: 'br1.api.riotgames.com',
        EUN1: 'eun1.api.riotgames.com',
        EUW1: 'euw1.api.riotgames.com',
        JP1: 'jp1.api.riotgames.com',
        KR: 'kr.api.riotgames.com',
        LA1: 'la1.api.riotgames.com',
        LA2: 'la2.api.riotgames.com',
        NA1: 'na1.api.riotgames.com',
        OC1: 'oc1.api.riotgames.com',
        TR1: 'tr1.api.riotgames.com',
        RU: 'ru.api.riotgames.com'
    };
    static ENDPOINTS = {
        summoner: '/lol/summoner/v4/summoners/by-name/'
    };

    getSummoner(region: string, sumonnerName: string) {
        return axios.get(`https://${ApiService.HOSTS[region]}${ApiService.ENDPOINTS.summoner}${sumonnerName}?api_key=${ApiService.API_KEY}`);
    }
}