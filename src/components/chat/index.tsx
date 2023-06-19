import React, { useEffect, useState } from "react";
import Icon from "components/icon";
import FBox from "elements/fbox";
import Heading from "elements/heading";
import { BasicVar, ChatboxVar, FontSize, HeaderVar, styledShadow } from "styles/variables";
import { Box } from "elements";
import Img from "elements/img";
import Text from "elements/text";
import Input from "components/input";
import useStore, { getDate } from "useStore";
import { DefaultColor } from "styles/variables";
import useSocket from "utils/socket.utils";

interface MessageType {
    account: UserObject
    msg: string
    time?: number
}

const MessageBox = ({ account, msg, time }: MessageType) => {
    return (
        <FBox
            g={'0.5rem'}
        >
            <Box
                minW={'50px'}
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
                p={'0.5rem 2rem 1rem 1.5rem'}
                bdradius={BasicVar.bRadius1.label}
                overflow={'hidden'}
            >
                <FBox
                    hAlign={'space-between'}
                >
                    <Text
                        as={'p'}
                        fsize={FontSize.fSize6.label}
                        color={DefaultColor.warning.label}
                        tAlign={'right'}
                    >
                        {account.userame}
                    </Text>
                    <Text
                        as={'p'}
                        fsize={FontSize.fSize6.label}
                        color={BasicVar.color2.label}
                        tAlign={'right'}
                    >
                        {getDate(time ?? 0)}
                    </Text>
                </FBox>
                <Text w={'100%'} wordWrap={'break-word'}>{msg}</Text>
            </Box>
        </FBox>
    )
}

const ChatBox = () => {
    const { isChat, update } = useStore();
    const [isShow, setIsShow] = useState<boolean>(isChat);
    const [msg, setMsg] = useState<string>('');
    const [msgs, setMsgs] = useState<MessageType[]>([]);

    const { send, res } = useSocket('');

    const chat = () => {
        const data = {
            account: {
                userame: 'Popcorn'
            },
            msg: msg,
        }
        send(data);
        setMsg('');
    }

    useEffect(() => {
        if (res) {
            setMsgs([]);
            // console.log(res);
            // let temp = res.data.replace(/\\"/g, '~!~');
            // temp = temp.replace(/"/g, '');
            // temp = temp.replace(/~!~/g, "\"");
            // const data = JSON.parse(temp);
            // setMsgs(data);
        }
    }, [res])

    useEffect(() => {
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
            maxH={'100vh'}
            bg={BasicVar.bg2.label}
            minW={isShow ? ChatboxVar.w.label : '0px'}
            w={isShow ? ChatboxVar.w.label : '0px'}
            bShadow={styledShadow}
            overflow={'hidden'}
            transition={'transform ease-in-out .2s'}
        >
            <FBox
                valign={'center'}
                hAlign={'space-between'}
                minH={HeaderVar.h.label}
                p={'0 1.5rem'}
                bg={BasicVar.bgCard.label}
                bShadow={styledShadow}
                zIndex={3}
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
            <Box
                flex={1}
                p={'0 1rem'}
                overflow={'auto'}
            >
                <FBox
                    hAlign={'flex-end'}
                    fDir={'column'}
                    g={'1rem'}
                    minH={'100%'}
                    fFamily={BasicVar.font3.label}
                >
                    {msgs.map((item: MessageType, key: number) => (
                        <MessageBox key={key} {...item} />
                    ))}
                </FBox>
            </Box>
            <FBox
                p={'2rem 1rem 1rem'}
                fFamily={BasicVar.font3.label}
            >
                <Input
                    placeholder={'Your Message'}
                    rightSide={(
                        <Box onClick={chat} cursor={'pointer'}>
                            <Icon icon={'Send'} fill={BasicVar.color2.label} />
                        </Box>
                    )}
                    value={msg}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)}
                    onKeyDown={(e: KeyboardEvent) => e.key === 'Enter' && chat()}
                />
            </FBox>
        </FBox>
    ) : null
}

export default ChatBox
