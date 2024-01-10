import axios from 'axios';

class GlobalService {
    constructor() {
        this.baseUrl = 'https://api.themoviedb.org/3/movie';
        this.apiKey = '143b514b8f21e9b1982a0d0202a3f1e8';
        this.popular = 'popular'
        this.upComing = 'upcoming'
        this.topRated = 'top_rated'
        this.nowPlaying = 'now_playing'
    }

    async fetchPopularMovies() {
        try {
            const response = await axios.get(`${this.baseUrl}/${this.popular}?api_key=${this.apiKey}`);
            return response.data.results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default GlobalService;
