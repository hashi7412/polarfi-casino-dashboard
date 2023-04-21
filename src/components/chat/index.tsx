import React from "react";
import Icon from "components/icon";
import FBox from "elements/fbox";
import Heading from "elements/heading";
import { BasicVar, ChatboxVar, HeaderVar, styledShadow } from "styles/variables";

const ChatBox = () => {
    return (
        <FBox
            fDir={'column'}
            minW={ChatboxVar.w.label}
            bg={BasicVar.bg2.label}
            bShadow={styledShadow}
            overflow={'hidden'}
        >
            <FBox
                valign={'center'}
                hAlign={'space-between'}
                h={HeaderVar.h.label}
                p={'0 1.5rem'}
                bg={BasicVar.bgCard.label}
                bShadow={styledShadow}
            >
                <Heading level={5} mb={0}>
                    Chat
                </Heading>
                <Icon icon="Cancel" />
            </FBox>
        </FBox>
    )
}

export default ChatBox
