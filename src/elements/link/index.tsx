import React from 'react';

import { StyledLink } from './styles/link.styled';

export interface BoxPropsType extends ElementDefaultProps {
    children: any
    to: string
}

const Link: React.FC<BoxPropsType> = ({ children, ...rest }) => {
    return (
        <StyledLink
            dplay={rest.dplay ? rest.dplay : 'flex'}
            valign={rest.valign ? rest.valign : 'center'}
            g={rest.g ? rest.g : '0.5rem'}
            {...rest}
        >
            {children}
        </StyledLink>
    )
}

export default Link;
