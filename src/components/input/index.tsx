import React from "react";
import FBox from "elements/fbox";
import { BasicVar, styledShadow } from "styles/variables";
import Box, { BoxPropsType } from "elements/box";

interface InputProps extends BoxPropsType {
    icon?: any
}

const Input = ({ icon, ...rest }: InputProps) => {
    return (
        <FBox
            w={'100%'}
            p={'1rem'}
            bg={BasicVar.bgCard.label}
            bdradius={BasicVar.bRound.label}
            bShadow={styledShadow}
        >
            <Box
                as={'input'}
                bd={'none'}
                bg={'none'}
                {...rest}
            />
            {rest.icon}
        </FBox>
    )
}

export default Input;