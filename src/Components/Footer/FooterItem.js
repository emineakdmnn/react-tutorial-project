import React from "react";

export const FooterItem = ({title, link, style, ...props}) => {
    return <p {...props} style={style}>{title}</p>
}
