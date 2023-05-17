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
                    h={space}
                    bg={'transparent'}
                ></Box>
            )}
            <Box
                dplay={'none'}
                top={space ? rest.top : `calc(${rest.top} + ${space})`}
                {...rest}
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
