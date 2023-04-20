import React from "react";
import { Box } from "elements";
import FBox from "elements/fbox";
import Menu from "../nav";
import { AsideVar, BasicVar } from "styles/variables";
import Logo from "elements/logo";
import Link from "elements/link";

const Sidebar = () => {
    return (
        <FBox
            fDir={'column'}
            bdr={`2px solid ${BasicVar.border.label}`}
            minW={AsideVar.w.label}
            tablet={{
                minW: AsideVar.tabletW.label
            }}
        >
            <Link to={'/'} p={'1.5rem 1rem'}>
                <Logo />
            </Link>
            <Box flex={1} p={'0 3rem 1.5rem 1.5rem'}>
                <Menu />
            </Box>
        </FBox>
    )
}

export default Sidebar
