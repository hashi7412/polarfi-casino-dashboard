import { Box } from "elements";
import React, { FC } from "react";

interface PropsType extends ElementDefaultProps {
    thumb: any
    space?: string
    children: any
}

const Dropdown: FC<PropsType> = ({ children, thumb, space, ...rest }) => {
    return (
        <Box
            position={'relative'}
            hover={{
                other: `
                    &>div:last-child {
                        display: block;
                    }
                `
            }}
        >
            <Box
                cursor={'pointer'}
            >
                {thumb}
            </Box>
            {space && (
                <Box
                    position={'absolute'}
                    top={'100%'}
                    w={'100%'}
                    h={space}
                    bg={'transparent'}
                ></Box>
            )}
            <Box
                dplay={'none'}
                {...rest}
                top={space ? `calc(${rest.top} + ${space})` : rest.top}
            >
                <Box
                >
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default Dropdown
