import axios from 'axios';

class MovieService {
    constructor() {
        this.baseUrl = 'https://api.themoviedb.org/3/movie';
        this.apiKey = '143b514b8f21e9b1982a0d0202a3f1e8';
    }

    async fetchData(endpoint) {
        try {
            const response = await axios.get(`${this.baseUrl}/${endpoint}?api_key=${this.apiKey}`);
            return response.data.results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async fetchPopularMovies() {
        return await this.fetchData('popular');
    }

    async fetchUpComingMovies() {
        return await this.fetchData('upcoming');
    }

    async fetchTopRatedMovies() {
        return await this.fetchData('top_rated');
    }

}

export default MovieService;
