import Box, { BoxPropsType } from "elements/box";
import React from "react";
import { FontStyle } from "styles/variables";

interface PropsType {
    children?: any
}

const Text: React.FC<PropsType & BoxPropsType> = ({ children, as, ...rest }) => {
    return (
        <Box
            as={as ? as : 'span'}
            fWeight={rest.fWeight ? rest.fWeight : FontStyle.bold}
            m={rest.m ? rest.m : '0'}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Text