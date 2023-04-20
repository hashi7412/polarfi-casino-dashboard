import styled from "styled-components";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";

export const InputWrapper = styled.label<{disabled: boolean}>`
    position: relative;
    display: flex;
    align-items: center;
    background: ${BasicVar.bgInput.label};
    padding: 0.3rem 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: ${FontSize.fSize3.label};

    &:after {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background: #B7D5ED59;
        content: '';
    }

    ${props => props.disabled ? `
        background: #000d;
        color: #fff3;
    ` : `` }

    &:hover, &:active {
        &:after {
            ${props => !props.disabled ? `background: ${DefaultColor.primary.label}` : ``};
            ${props => props.disabled ? `
                background: #000d;
                color: #fff3;
            ` : `` }
        }
    }
`

export const StyledInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;

    &:placeholder {
        color: ${BasicVar.bgOpacity.label};
    }
`
