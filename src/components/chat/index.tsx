import React from "react";
import Icon from "components/icon";
import FBox from "elements/fbox";
import Heading from "elements/heading";
import { BasicVar, ChatboxVar, FontSize, HeaderVar, styledShadow } from "styles/variables";
import { Box } from "elements";
import Img from "elements/img";
import Text from "elements/text";
import Input from "components/input";
import useStore, { getDate } from "useStore";

interface MessageType {
    account: UserObject
    msg: string
    time: number
}

const messages: MessageType[] = [
    { account: { userame: 'Popcorn' }, msg: 'Hi, everyone', time: 12392839 },
    { account: { userame: 'Popcorn' }, msg: 'Lorem ugsum dalor sit amet cansectetuer attplscing slit', time: 12392839 },
]

const MessageBox = ({ account, msg, time }: MessageType) => {

    return (
        <FBox
            g={'0.5rem'}
        >
            <Box
                w={'50px'}
                h={'50px'}
                bdradius={BasicVar.bRound.label}
                overflow={'hidden'}
                bd={`1px solid ${BasicVar.color.label}`}
            >
                <Img w={'50px'} h={'50px'} src={account.avatar || '/avatar.png'} />
            </Box>
            <Box
                flex={1}
                bg={BasicVar.bgCard.label}
                p={'0.2rem 0.5rem 1.5rem 1.5rem'}
                bdradius={BasicVar.bRadius1.label}
            >
                <Text
                    as={'p'}
                    fSize={FontSize.fSize6.label}
                    color={BasicVar.color2.label}
                    tAlign={'right'}
                >
                    {getDate(time)}
                </Text>
                <Text w={'100%'}>{msg}</Text>
            </Box>
        </FBox>
    )
}

const ChatBox = () => {
    const { isChat, update } = useStore();
    const [isShow, setIsShow] = React.useState<boolean>(isChat);

    React.useEffect(() => {
        if (isChat === true) {
            setIsShow(true);
        } else {
            setTimeout(() => { setIsShow(false) }, 200)
        }
    }, [isChat])

    return true ? (
        <FBox
            transform={isChat ? `translate(0, 0)` : `translate(${ChatboxVar.w.value}, 0)`}
            fDir={'column'}
            h={'100vh'}
            bg={BasicVar.bg2.label}
            maxW={isShow ? ChatboxVar.w.label : '0px'}
            bShadow={styledShadow}
            overflow={'hidden'}
            transition={'transform ease-in-out .2s'}
        >
            <FBox
                valign={'center'}
                hAlign={'space-between'}
                h={HeaderVar.h.label}
                p={'0 1.5rem'}
                bg={BasicVar.bgCard.label}
                bShadow={styledShadow}
            >
                <Heading
                    level={5}
                    mb={0}
                    txtTrans={'uppercase'}
                >
                    Chat
                </Heading>
                <Box
                    as={'button'}
                    bg={'none'}
                    bd={'none'}
                    otl={'none'}
                    p={'0'}
                    onClick={() => update({ isChat: !isChat })}
                >
                    <Icon icon="Cancel" />
                </Box>
            </FBox>
            <FBox
                flex={1}
                p={'0 1rem'}
                fDir={'column-reverse'}
                g={'1rem'}
                fFamily={BasicVar.font3.label}
            >
                {messages.map((item: MessageType, key: number) => (
                    <MessageBox key={key} {...item} />
                ))}
            </FBox>
            <FBox
                p={'2rem 1rem 1rem'}
                fFamily={BasicVar.font3.label}
            >
                <Input
                    placeholder={'Your Message'}
                    rightSide={(
                        <Icon icon={'Send'} fill={BasicVar.color2.label} />
                    )}
                />
            </FBox>
        </FBox>
    ) : null
}

export default ChatBox
