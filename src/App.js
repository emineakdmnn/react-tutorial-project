import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Container/Home";
import Movie from "./Components/Container/Movie";
import Series from "./Components/Container/Series";
import MovieDetails from "./pages/Movies/Detail";
import SeriesDetail from "./pages/Series/Detail";
import VideoPlayerPage from "./pages/Video/page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movie />} />
                <Route path="/movie-details-id/:id" element={<MovieDetails />} />
                <Route path="/video" element={<VideoPlayerPage />} />
                <Route path="/series" element={<Series />} />
                <Route path="/series-details-id/:id" element={<SeriesDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
