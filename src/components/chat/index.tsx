import React, { useEffect, useRef, useState } from "react";
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
import useWebSocket from 'react-use-websocket';

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
                p={'0.5rem 2rem 1rem 1.5rem'}
                bdradius={BasicVar.bRadius1.label}
            >
                <FBox
                    hAlign={'space-between'}
                >
                    <Text
                        as={'p'}
                        fSize={FontSize.fSize6.label}
                        color={DefaultColor.warning.label}
                        tAlign={'right'}
                    >
                        {account.userame}
                    </Text>
                    <Text
                        as={'p'}
                        fSize={FontSize.fSize6.label}
                        color={BasicVar.color2.label}
                        tAlign={'right'}
                    >
                        {getDate(time ?? 0)}
                    </Text>
                </FBox>
                <Text w={'100%'}>{msg}</Text>
            </Box>
        </FBox>
    )
}

const ChatBox = () => {
    const { isChat, update } = useStore();
    const didUnmount = useRef(false);
    const [isShow, setIsShow] = useState<boolean>(isChat);
    const [msg, setMsg] = useState<string>('');
    const [msgs, setMsgs] = useState<MessageType[]>([]);
    const msgBoxRef = useRef<HTMLDivElement>(null);
    const { sendMessage, lastMessage, readyState } = useWebSocket(
        'ws://localhost:4125',
        {
            shouldReconnect: (closeEvent) => {
                return didUnmount.current === false;
            },
            reconnectAttempts: 10,
            reconnectInterval: 3000
        }
    );

    const chat = () => {
        const data = {
            account: {
                userame: 'Popcorn'
            },
            msg: msg,
        }
        sendMessage(JSON.stringify(data));
        setMsg('');
    }

    useEffect(() => {
        if (lastMessage) {
            let temp = lastMessage.data.replace(/\\"/g, '~!~');
            temp = temp.replace(/"/g, '');
            temp = temp.replace(/~!~/g, "\"");
            const data = JSON.parse(temp);
            setMsgs(data);
        }
    }, [lastMessage])

    useEffect(() => {
        switch (readyState) {
            case -1:
                console.log('Uninstantiated');
                return;
            case 0:
                console.log('Socket connecting...');
                return;
            case 1:
                console.log('Socket connected');
                return;
            case 2:
                console.log('Socket closing...');
                return;
            case 3:
                console.log('Socket closed');
                return;

        }
    }, [readyState])

    useEffect(() => {
        if (isChat === true) {
            setIsShow(true);
        } else {
            setTimeout(() => { setIsShow(false) }, 200)
        }
    }, [isChat])

    useEffect(() => {
        return () => {
            didUnmount.current = true;
        };
    }, []);

    return true ? (
        <FBox
            transform={isChat ? `translate(0, 0)` : `translate(${ChatboxVar.w.value}, 0)`}
            fDir={'column'}
            maxH={'100vh'}
            bg={BasicVar.bg2.label}
            maxW={isShow ? ChatboxVar.w.label : '0px'}
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
                ref={msgBoxRef}
                flex={1}
                p={'0 1rem'}
                overflow={'auto'}
            >
                <FBox
                    hAlign={'flex-end'}
                    fDir={'column'}
                    g={'1rem'}
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
