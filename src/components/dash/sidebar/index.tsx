import React from "react";
import { Box } from "elements";
import FBox from "elements/fbox";
import Menu from "../nav";
import { AsideVar, BasicVar, HeaderVar, styledShadow } from "styles/variables";
import Logo from "elements/logo";
import Link from "elements/link";

const Sidebar = () => {
    return (
        <FBox
            fDir={'column'}
            minW={AsideVar.w.label}
            tablet={{
                minW: AsideVar.tabletW.label
            }}
            bg={BasicVar.bg2.label}
            bShadow={styledShadow}
        >
            <FBox
                valign={'center'}
                h={HeaderVar.h.label}
            >
                <Link to="/" p={'0 1.5rem'}>
                    <Logo />
                </Link>
            </FBox>
            <Box flex={1} p={'0 3rem 1.5rem 1.5rem'}>
                <Menu />
            </Box>
        </FBox>
    )
}

export default Sidebar
