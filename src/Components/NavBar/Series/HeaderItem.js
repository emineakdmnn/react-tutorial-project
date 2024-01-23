import React from "react";

export const HeaderItem = ({title, path, style, ...props}) => {
    return <a {...props} href={path} style={style}>{title}</a>
}