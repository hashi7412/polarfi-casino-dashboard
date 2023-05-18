import Box, { BoxPropsType } from "elements/box";
import React from "react";
import { FontSize, FontStyle } from "styles/variables";

interface PropsType {
    children?: any
    level: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading: React.FC<PropsType & BoxPropsType> = ({ children, level, ...rest }) => {
    return (
        <Box
            as={`h${level}`}
            fWeight={rest.fWeight ? rest.fWeight : FontStyle.bold}
            m={rest.m ? rest.m : '0'}
            mb={rest.mb ? rest.mb : '0.45em'}
            fsize={rest.fSize ? rest.fSize : FontSize[`fSize${level}`].label}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Heading