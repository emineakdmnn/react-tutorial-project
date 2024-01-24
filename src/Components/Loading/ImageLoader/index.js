import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ImageLoader(props) {
    const { imageUrl, defaultImageUrl, alt, ...restProps } = props;
    const [loading, setLoading] = useState(true);
    const [verifiedImageUrl, setVerifiedImageUrl] = useState(null);

    const imageLoad = () => {
        setLoading(true);
        var image = new Image();
        image.src = imageUrl || defaultImageUrl;
        image.onload = function () {
            setVerifiedImageUrl(image.src);
            setLoading(false);
        };

        image.onerror = function () {
            console.error(`Failed to load image: ${image.src}`);
            setVerifiedImageUrl(props.defaultImageUrl);
            setLoading(false);
        };
    };

    useEffect(() => {
        imageLoad();
    }, [imageUrl, defaultImageUrl]);

    return (
        <img
            src={verifiedImageUrl}
            alt={alt}
            style={{ display: loading ? "none" : "block" }}
            {...restProps}
        />
    );
}

ImageLoader.propTypes = {
    imageUrl: PropTypes.string,
    defaultImageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageLoader;
