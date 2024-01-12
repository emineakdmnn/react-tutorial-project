import axios from 'axios';

class MovieService {
    constructor() {
        this.baseUrl = 'https://api.themoviedb.org/3/movie';
        this.apiKey = '143b514b8f21e9b1982a0d0202a3f1e8';
    }

    fetchData(endpoint) {
        return axios.get(`${this.baseUrl}/${endpoint}?api_key=${this.apiKey}`)
            .then(response => {
                response.data.status = response.status
                return response.data
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }

    fetchPopularMovies() {
        return this.fetchData('popular');
    }

    fetchUpComingMovies() {
        return this.fetchData('upcoming');
    }

    fetchTopRatedMovies() {
        return this.fetchData('top_rated');
    }
}

export default MovieService;
