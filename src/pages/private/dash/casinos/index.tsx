import React from "react";
import useStore from "useStore";
import { BasicVar } from "styles/variables";
import FBox from "elements/fbox";
import { Box } from "elements";
import Text from "elements/text";
import Icon from "components/icon";

const games = [
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
    { name: "Slot", link: '', img: 'slot.png' },
]

const Casinos = () => {
    const { isChat } = useStore();
    return (
        <FBox
            fWrap={'wrap'}
            pt={'1rem'}
            m={'0 -0.5rem'}
            gy={'1rem'}
        >
            {games.map((item, key: number) => (
                <Box key={key}
                    w={isChat ? '20%' : '25%'}
                    p={'0 0.7rem'}
                >
                    <Box
                        w={'100%'}
                        pt={'70%'}
                        bg={`no-repeat url(/games/${item.img})`}
                        bgSize={'cover'}
                        bgPos={'center'}
                        bdradius={BasicVar.bRadius1.label}
                        mb={'0.7rem'}
                    />
                    <FBox
                        valign={'center'}
                        hAlign={'space-between'}
                        g={'1rem'}
                    >
                        <Text>{item.name}</Text>
                        <Box
                            as={'button'}
                            bg={'none'}
                            otl={'none'}
                            bd={'none'}
                        >
                            <Icon icon="Play" />
                        </Box>
                    </FBox>
                </Box>
            ))}
        </FBox>
    )
}

export default Casinos