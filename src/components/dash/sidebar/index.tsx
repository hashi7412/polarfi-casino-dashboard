import React from "react";
import { Box } from "elements";
import FBox from "elements/fbox";
import Header from "../header";
import Heading from "elements/heading";
import Menu from "../nav";
import { AsideVar, BasicVar } from "styles/variables";

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
            <Header />
            <Box flex={1} p={'1.5rem 3rem 1.5rem 1.5rem'}>
                <Heading
                    level={5}
                    fWeight={300}
                    lSpace={'5px'}
                    txtTrans={'uppercase'}
                    color={BasicVar.color2.label}
                >
                    Menu
                </Heading>
                <Menu />
            </Box>
        </FBox>
    )
}

export default Sidebar
