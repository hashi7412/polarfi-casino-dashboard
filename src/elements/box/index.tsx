import React from 'react';

import { BoxWrapper } from './styles/box.styled';

export interface BoxPropsType extends ElementDefaultProps {
    as?: any
    ref?: any
    children?: any
}

const Box: React.FC<BoxPropsType> = ({ children, ...rest }) => {
    return (
        <BoxWrapper {...rest}>
            {children}
        </BoxWrapper>
    )
}

export default Box;
