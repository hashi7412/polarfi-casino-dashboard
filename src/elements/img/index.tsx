import React from "react";
import { StyledImg } from "./styles/img.styled";

const Img = ({ ...rest }) => {
    return (
        <StyledImg {...rest} />
    )
}

export default Img;