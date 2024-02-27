import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Container/Home";
import Movie from "./Components/Container/Movie";
import Series from "./Components/Container/Series";
import VideoPlayerPage from "./pages/Video";
import DetailsMovie from "./Components/Container/MovieDetail";
import DetailsSeries from "./Components/Container/SeriesDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movie />} />
                <Route path="/movie-details-id/:id" element={<DetailsMovie />} />
                <Route path="/video" element={<VideoPlayerPage />} />
                <Route path="/series" element={<Series />} />
                <Route path="/series-details-id/:id" element={<DetailsSeries />} />
            </Routes>
        </Router>
    );
}

export default App;
