import axios from 'axios';

class Service {
    constructor() {
        this.baseUrls = {
            movie: 'https://api.themoviedb.org/3/movie',
            series: 'https://api.themoviedb.org/3/tv'
        };
        this.apiKey = '143b514b8f21e9b1982a0d0202a3f1e8';
    }

    fetchData(endpoint, type) {
        const baseUrl = type === 'movie' ? this.baseUrls.movie : this.baseUrls.series;

        return axios.get(`${baseUrl}/${endpoint}?api_key=${this.apiKey}`)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
                throw error;
            });
    }

    fetchMovieDetails(movieId) {
        return this.fetchData(movieId, 'movie');
    }

    fetchPopularMovies() {
        return this.fetchData('popular', 'movie');
    }

    fetchUpcomingMovies() {
        return this.fetchData('upcoming', 'movie');
    }

    fetchTopRatedMovies() {
        return this.fetchData('top_rated', 'movie');
    }

    fetchAiringTodaySeries() {
        return this.fetchData('airing_today', 'series')
    }

    fetchOnTheAirSeries() {
        return this.fetchData('on_the_air', 'series')
    }

    fetchPopularSeries() {
        return this.fetchData('popular', 'series')
    }

    fetchTopRatedSeries() {
        return this.fetchData('top_rated', 'series')
    }

    fetchSeriesDetails(seriesId) {
        return this.fetchData(seriesId, 'series');
    }
}

export default Service;
