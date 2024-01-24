import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Components/Container/Home";
import Popular from "./pages/Movie/Popular";
import TopRated from "./pages/Movie/TopRated";
import UpComing from "./pages/Movie/UpComing";
import PopularMovieDetail from "./pages/Movie/Popular/Detail";
import TopRatedDetails from "./pages/Movie/TopRated/Detail";
import UpComingDetail from "./pages/Movie/UpComing/Detail";
import AiringToday from "./pages/Series/AiringToday";
import OnTheAir from "./pages/Series/OnTheAir";
import PopularSeries from "./pages/Series/Popular";
import TopRatedSeries from "./pages/Series/TopRated";
import AiringTodaySeriesDetail from "./pages/Series/AiringToday/Detail";
import OnTheAirSeriesDetail from "./pages/Series/OnTheAir/Detail";
import PopularSeriesDetail from "./pages/Series/Popular/Detail";
import TopRatedSeriesDetail from "./pages/Series/TopRated/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Popular/>}/>
                <Route path="/popular-movies" element={<Popular/>}/>
                <Route path="/popular-movie-id/:id" element={<PopularMovieDetail/>}/>
                <Route path="/top-rated-movies" element={<TopRated/>}/>
                <Route path="/top-rated-movie-id" element={<TopRatedDetails/>}/>
                <Route path="/up-coming-movies" element={<UpComing/>}/>
                <Route path="/up-coming-movie-id/:id" element={<UpComingDetail/>}/>
                <Route path="/series" element={<AiringToday/>}/>
                <Route path="/airing-today-series" element={<AiringToday/>}/>
                <Route path="/airing-today-series-id/:id" element={<AiringTodaySeriesDetail/>}/>
                <Route path="/on-the-air-series" element={<OnTheAir/>}/>
                <Route path="/on-the-air-series-id/:id" element={<OnTheAirSeriesDetail/>}/>
                <Route path="/popular-series" element={<PopularSeries/>}/>
                <Route path="/popular-series-id/:id" element={<PopularSeriesDetail/>}/>
                <Route path="/top-rated-series" element={<TopRatedSeries/>}/>
                <Route path="/top-rated-series-id/:id" element={<TopRatedSeriesDetail/>}/>
            </Routes>
        </Router>
    );
}

export default App;
