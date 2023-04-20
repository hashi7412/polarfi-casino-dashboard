import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "elements";
import FBox from "elements/fbox";
import Sidebar from "components/dash/sidebar";

const DashLayout = () => {
    return (
        <FBox h={'100vh'}>
            <Sidebar />
            <Box
                flex={1}
                minH={'100%'}
                p={'2rem 1rem 0'}
                overflow={'auto'}
            >
                <Outlet />
            </Box>
        </FBox>
    )
}

export default DashLayout
