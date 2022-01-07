import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) =>{
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '593cb66c48msh3a575233853cde8p1ca955jsnc930abcde26c'
          }
    })

    return data;
}