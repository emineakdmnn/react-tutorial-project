import React, { useEffect, useState } from 'react';
import styles from '../../Components/Container/Movie/style.module.scss';
import Service from '../../services/Service';
import { Loading } from '../../Components/Loading';
import MovieCard from '../../Components/Cards/MovieCard';
import Index from '../../Components/Error';
import Header from "../../Components/NavBar/Header";
import cn from "classnames";

const PopularPerson = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [popularPerson, setPopularPerson] = useState([]);
    const service = new Service();

    const contentLoad = () => {
        setLoading(true);
        service.fetchPopularPerson().then(
            (response) => {
                setPopularPerson(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setPopularPerson([]);
                setErrorResponse(error);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
        <div>
            <Header headerTitle={'POPULAR PERSON'}/>
            <ul className={styles['movie-list']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading &&
                    popularPerson?.map((movie, index) => (
                        <MovieCard key={'popular-person' + index}
                                   id={movie.id}
                                   posterUrl={movie.profile_path}
                                   title={movie.name}
                        />

                    ))}
            </ul>
        </div>
    );
};

export default PopularPerson;
