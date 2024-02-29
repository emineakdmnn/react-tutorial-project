import axios from 'axios';

class Service {
    constructor() {
        this.baseUrls = {
            movie: 'https://api.themoviedb.org/3/movie',
            series: 'https://api.themoviedb.org/3/tv',
            person: 'https://api.themoviedb.org/3/person',
            trending: 'https://api.themoviedb.org/3/trending',
            searchMovie: 'https://api.themoviedb.org/3/search/movie',
            searchSeries: 'https://api.themoviedb.org/3/search/tv',
            searchAll: 'https://api.themoviedb.org/3/search/multi'

        };
        this.apiKey = '143b514b8f21e9b1982a0d0202a3f1e8';
    }


    fetchData(endpoint, type) {
        const baseUrl = this.baseUrls[type] || this.baseUrls.movie || this.baseUrls.series || this.baseUrls.person || this.baseUrls.trending ;


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

    fetchNowPlayingMovies() {
        return this.fetchData('now_playing', 'movie');
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

    fetchPopularPerson() {
        return this.fetchData('popular', 'person')
    }

    fetchTrendWeekMovies() {
        return this.fetchData('movie/week','trending')
    }

    fetchTrendDayMovies() {
        return this.fetchData('movie/day','trending')
    }

    fetchTrendSeries() {
        return this.fetchData('tv/week','trending')
    }

    fetchSearchMovie(keyword) {
        const baseUrl = this.baseUrls.searchMovie;

        return axios.get(`${baseUrl}?api_key=${this.apiKey}&query=${keyword}`)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
                throw error;
            });
    }

    fetchSearchSeries(keyword) {
        const baseUrl = this.baseUrls.searchSeries;

        return axios.get(`${baseUrl}?api_key=${this.apiKey}&query=${keyword}`)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
                throw error;
            });
    }

    fetchSearchAll(keyword) {
        const baseUrl = this.baseUrls.searchAll;

        return axios.get(`${baseUrl}?api_key=${this.apiKey}&query=${keyword}`)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
                throw error;
            });
    }


}

export default Service;
