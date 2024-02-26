import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Components/Container/Home";
import Popular from "./pages/Movie/Popular";
import TopRated from "./pages/Movie/TopRated";
import UpComing from "./pages/Movie/UpComing";
import PopularMovieDetail from "./pages/Movie/Popular/Detail";
import TopRatedDetails from "./pages/Movie/TopRated/Detail";
import UpComingDetail from "./pages/Movie/UpComing/Detail";
import AiringToday from "./pages/Serie/AiringToday";
import OnTheAir from "./pages/Serie/OnTheAir";
import PopularSeries from "./pages/Serie/Popular";
import TopRatedSeries from "./pages/Serie/TopRated";
import AiringTodaySeriesDetail from "./pages/Serie/AiringToday/Detail";
import OnTheAirSeriesDetail from "./pages/Serie/OnTheAir/Detail";
import PopularSeriesDetail from "./pages/Serie/Popular/Detail";
import TopRatedSeriesDetail from "./pages/Serie/TopRated/Detail";
import PopularPerson from "./pages/PopularPerson";
import {MdOfflineBolt} from "react-icons/md";
import Movie from "./Components/Container/Movie";
import Series from "./Components/Container/Series";
import MovieDetails from "./pages/Movies/Detail";
import SeriesDetail from "./pages/Series/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movie/>}/>
                <Route path="/movie-details-id/:id" element={<MovieDetails/>}/>
                <Route path="/series" element={<Series/>}/>
                <Route path="/series-details-id/:id" element={<SeriesDetail/>}/>

            </Routes>
        </Router>
    );
}

export default App;
