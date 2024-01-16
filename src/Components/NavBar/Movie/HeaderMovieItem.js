import React from "react";

export const HeaderMovieItem = ({title, path, style, ...props}) => {
    return <a {...props} href={path} style={style}>{title}</a>
}