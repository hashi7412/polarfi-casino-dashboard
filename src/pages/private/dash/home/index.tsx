import Button from "components/btn";
import Tab from "components/tab";
import { _DashBannerImage } from "constants/image.constant";
import { Box } from "elements";
import FBox from "elements/fbox";
import Heading from "elements/heading";
import Text from "elements/text";
import React from "react";
import { FontSize } from "styles/variables";

const items: CategoryItemType[] = [
    { label: "My Bets", key: 'mybets' },
    { label: "All Bets", key: 'allbets' },
    { label: "High Rollers", key: 'highrollers' }
]

const DashHome = () => {

    const [tabIndex, setTabIndex] = React.useState(0);

    return (
        <React.Fragment>
            <Box
                w={'100%'}
                h={'285px'}
                bg={`no-repeat url(${_DashBannerImage})`}
                bgColor={'white'}
                bgSize={'cover'}
                bgPos={'right'}
            >
                <FBox
                    fDir={'column'}
                    hAlign={'center'}
                    valign={'flex-start'}
                    g={'0.5rem'}
                    h={'100%'}
                    w={'70%'}
                    p={'0 2rem'}
                    mb={'1rem'}
                >
                    <Heading
                        level={1}
                        mb={'0'}
                        fSize={FontSize.fSize2.label}
                    >
                        Welcome to {" "}
                        <Text>
                            Polarfi Jackpot
                        </Text>
                    </Heading>
                    <Text
                        mb={'0'}
                    >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                    </Text>
                    <Button
                        bg={"success"}
                    >
                        Deposit
                    </Button>
                </FBox>
                <Tab
                    items={items}
                    activeKey={tabIndex}
                    setActiveKey={(i: CategoryItemType, k: number) => setTabIndex(k)}
                >
                    This is Tab
                </Tab>
            </Box>
        </React.Fragment>
    )
}

export default DashHome
