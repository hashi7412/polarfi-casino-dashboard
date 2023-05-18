import React from "react";
import Dropdown from "components/dropdown";
import { Box } from "elements";
import FBox from "elements/fbox";
import Img from "elements/img";
import Text from "elements/text";
import { BasicVar, styledShadow } from "styles/variables";
import useStore from "useStore";

const PrivateAccount = () => {
    const { logout } = useStore();

    return (
        <Dropdown
            thumb={(
                <Box>
                    <FBox
                        valign={'center'}
                        g={'0.5rem'}
                        bg={BasicVar.bg2.label}
                        bdradius={BasicVar.bRound.label}
                        p={'0.5rem 1rem 0.5rem 0.5rem'}
                    >
                        <FBox>
                            <Box
                                w={'40px'}
                                h={'40px'}
                                bdradius={BasicVar.bRound.label}
                                overflow={'hidden'}
                                bd={`1px solid ${BasicVar.color.label}`}
                            >
                                <Img w={'40px'} h={'40px'} src={'/avatar.png'} />
                            </Box>
                        </FBox>
                        <Text
                            color={BasicVar.color2.label}
                        >Nickname</Text>
                    </FBox>
                </Box>
            )}
            space={'0.5rem'}
            position={'absolute'}
            top={'100%'}
            w={'100%'}
            p={'0.5rem'}
            bg={BasicVar.bg2.label}
            bShadow={styledShadow}
            bdradius={BasicVar.bRadius1.label}
        >
            <FBox
                as={'ul'}
            >
                <Box
                    as={'li'}
                    onClick={() => logout()}
                    p={'0.5rem 1rem'}
                    w={'100%'}
                    bdradius={BasicVar.bRadius1.label}
                    cursor={'pointer'}
                    hover={{
                        bg: BasicVar.bg.label
                    }}
                >
                    Logout
                </Box>
            </FBox>
        </Dropdown>
    )
}

export default PrivateAccount;
