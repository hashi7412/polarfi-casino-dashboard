import { Box } from "elements";
import styled from "styled-components";

interface IconProps {
    width?: string
    height?: string
    fill?: string
}

export const IconWrapper = styled(Box)<IconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width ? props.width : "1rem"};
    height: ${props => props.height ? props.height : "1rem"};
`