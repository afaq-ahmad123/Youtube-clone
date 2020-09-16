import axios from 'axios';

const api_key = "AIzaSyCiZVNQKZ1icerW5guDVmLc-MYV7NOUm58";
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: api_key,
        type: 'video'
    }
});