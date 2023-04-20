import React from "react";
import Box, { BoxPropsType } from "elements/box";

const FBox: React.FC<BoxPropsType> = ({ children, ...rest }) => {
    return (
        <Box dplay={'flex'} {...rest}>
            {
                children
            }
        </Box>
    )
}

export default FBox;