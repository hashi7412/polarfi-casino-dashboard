import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "elements";
import FBox from "elements/fbox";
import Sidebar from "components/dash/sidebar";
import Header from "components/dash/header";
import ChatBox from "components/chat";

const DashLayout = () => {
    return (
        <FBox h={'100vh'}>
            <Sidebar />
            <FBox
                flex={1}
            >
                <FBox
                    flex={1}
                    fDir={'column'}
                    overflow={'hidden'}
                >
                    <Header />
                    <Box
                        flex={1}
                        p={'0 2rem'}
                        mr={'0.5rem'}
                        overflow={'auto'}
                    >
                        <Outlet />
                    </Box>
                </FBox>
                <ChatBox />
            </FBox>
        </FBox>
    )
}

export default DashLayout
