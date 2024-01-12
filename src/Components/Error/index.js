import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from './style.module.scss';
import PropTypes from "prop-types";

function Error(props) {
    let errorImageUrl = 'https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif';
    const [mainTitle, setMainTitle] = React.useState(
        props?.mainTitle ?? '404'
    )
    const [descriptionFirst, setDescriptionFirst] = React.useState(
        props?.description ?? "Look like you're lost"
    )
    const [descriptionSecond, setDescriptionSecond] = React.useState(
        props?.descriptionSecond ?? "The page you are looking for is not available!"
    )
    const [redirectUrl, setRedirectUrl] = React.useState(
        props?.redirectUrl ?? "/"
    )
    const [redirectBtnTitle, setRedirectBtnTitle] = React.useState(
        props?.redirectBtnTitle ?? 'Go to Home'
    )

    useEffect(() => {
        setMainTitle(props?.mainTitle ?? '404')
        setDescriptionFirst(props?.descriptionFirst ?? "Look like you're lost")
        setDescriptionSecond(props?.descriptionSecond ?? "The page you are looking for is not available!")
        setRedirectUrl(props?.redirectUrl ?? "/")
        setRedirectBtnTitle(props?.redirectBtnTitle ?? 'Go to Home')
    }, [props])

    return (
        <div className={styles['error-container']}>
            <div className={styles['page-404']}>
                <div className={styles['fourZeroFourBg']}
                     style={{backgroundImage: 'url(' + errorImageUrl + ')'}}>
                    <h1>{mainTitle}</h1>
                </div>
                <h3 className={styles['h2']}>{descriptionFirst}</h3>
                <p>{descriptionSecond}</p>
                <Link to={redirectUrl} className={styles['link404']}>
                    {redirectBtnTitle}
                </Link>
            </div>

        </div>
    );
};

Error.propTypes = {
    mainTitle: PropTypes.string,
    descriptionFirst: PropTypes.string,
    descriptionSecond: PropTypes.string,
    redirectUrl: PropTypes.string,
    redirectBtnTitle: PropTypes.string
}

export default Error

