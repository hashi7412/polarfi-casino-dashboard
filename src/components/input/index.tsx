import React from "react";
import FBox from "elements/fbox";
import { BasicVar } from "styles/variables";
import Box, { BoxPropsType } from "elements/box";

interface InputProps extends BoxPropsType {
    rightSide?: any
    placeholder?: string
    value?: string | number
    onChange?: any
    onKeyDown?: any
    type?: 'text' | 'email' | 'password'
}

const Input = ({
    rightSide,
    placeholder,
    value,
    onChange,
    onKeyDown,
    type,
    ...rest
}: InputProps) => {
    return (
        <FBox
            g={'0.5rem'}
            w={'100%'}
            p={'0.8rem 1.5rem'}
            valign={'center'}
            bg={BasicVar.bgCard.label}
            bdradius={BasicVar.bRound.label}
            {...rest}
        >
            <Box
                as={'input'}
                type={type}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                flex={1}
                minW={'0'}
                bd={'none'}
                bg={'none'}
                otl={'none'}
            />
            {rightSide ? rightSide : null}
        </FBox>
    )
}

export default Input;