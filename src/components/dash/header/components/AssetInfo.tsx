import Button from "components/btn";
import FBox from "elements/fbox";
import { Logo2 } from "elements/logo";
import Text from "elements/text";
import React from "react";
import { BasicVar, DefaultColor, FontStyle } from "styles/variables";

const AssetInfo = () => {
    return (

        <FBox
            flex={1}
            hAlign={'center'}
        >
            <FBox
                valign={'center'}
                hAlign={'space-between'}
                g={'1rem'}
                minW={'20rem'}
                p={'0.5rem 0.7rem'}
                bg={BasicVar.bg2.label}
                bdradius={BasicVar.bRound.label}
            >
                <FBox
                    flex={1}
                    valign={'center'}
                    g={'0.5rem'}
                >
                    <Logo2 w="1.8rem" h="1.8rem" />
                    <FBox
                        valign={'center'}
                        g={'0.5rem'}
                    >
                        <Text
                            fWeight={FontStyle.bold.label}
                        >
                            1,000,000
                        </Text>
                        <Text
                            color={DefaultColor.success.label}
                        >
                            POL
                        </Text>
                    </FBox>
                </FBox>
                <Button>Wallet</Button>
            </FBox>
        </FBox>
    )
}

export default AssetInfo;
