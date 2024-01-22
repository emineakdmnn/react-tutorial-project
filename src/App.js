import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Components/Container/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import PopularMovieDetail from "./pages/Popular/Detail";
import TopRatedDetails from "./pages/TopRated/Detail";
import UpComingDetail from "./pages/UpComing/Detail";

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
            </Routes>
        </Router>
    );
}

export default App;
