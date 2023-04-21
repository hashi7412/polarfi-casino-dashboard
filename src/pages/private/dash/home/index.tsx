import Button from "components/btn";
import Tab from "components/tab";
import { _DashBannerImage } from "constants/image.constant";
import { Box } from "elements";
import FBox from "elements/fbox";
import Heading from "elements/heading";
import Text from "elements/text";
import React from "react";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";

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
                    g={'1rem'}
                    h={'100%'}
                    w={'70%'}
                    p={'0 2rem'}
                    mb={'1rem'}
                >
                    <Heading
                        level={1}
                        mb={'0'}
                        fSize={FontSize.fSize2.label}
                        fFamily={BasicVar.font2.label}
                    >
                        <Text
                            color={DefaultColor.primary.label}
                            txtTrans={'uppercase'}
                            tShadow={`0 0 2px ${DefaultColor.black.value}`}
                        >
                            Welcome to &nbsp;
                        </Text>
                        <Text
                            color={DefaultColor.warning.label}
                            txtTrans={'uppercase'}
                            tShadow={`0 0 2px ${DefaultColor.black.value}`}
                        >
                            Polarfi Jackpot
                        </Text>
                    </Heading>
                    <Text
                        mb={'0'}
                        maxW={'400px'}
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
