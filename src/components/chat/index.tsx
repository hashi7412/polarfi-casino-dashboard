import React from "react";
import Icon from "components/icon";
import FBox from "elements/fbox";
import Heading from "elements/heading";
import { ChatboxVar, HeaderVar } from "styles/variables";

const ChatBox = () => {
    return (
        <FBox
            fDir={'column'}
            minW={ChatboxVar.w.label}
        >
            <FBox
                valign={'center'}
                hAlign={'space-between'}
                h={HeaderVar.h.label}
                p={'0 0.5rem'}
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
