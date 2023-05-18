import React from "react";
import FBox from "elements/fbox";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";
import Text from "elements/text";

interface PropsType {
    children: any
    items: CategoryItemType[]
    activeKey: number
    setActiveKey?: any
}

const Tab: React.FC<PropsType> = ({ children, items, activeKey, setActiveKey }) => {
    return (
        <FBox
            fDir={'column'}
        >
            <FBox
                alignSelf={'flex-start'}
                valign={'center'}
                fWrap={'wrap'}
                g={'0.5rem'}
                p={'0.5rem'}
                mb={'1.5rem'}
                bg={'linear-gradient(101.05deg, rgba(88, 209, 182, 0.3) -5.36%, rgba(45, 81, 67, 0.3) 29.46%, rgba(36, 88, 67, 0.3) 56.03%, rgba(88, 209, 182, 0.3) 81.92%)'}
                bdradius={BasicVar.bRound.label}
            >
                {items.map((item, key) => (
                    <FBox
                        as={'button'}
                        key={key}
                        onClick={() => setActiveKey ? setActiveKey(item, key) : null}
                        valign={'center'}
                        p={'0.7rem 1.2rem'}
                        bg={activeKey === key ? BasicVar.bg.label : 'transparent'}
                        bdradius={BasicVar.bRound.label}
                        g={'0.5rem'}
                        transition={'all ease-in-out .2s'}
                    >
                        <Text
                            color={activeKey === key ? DefaultColor.white.label : BasicVar.color2.label}
                        >
                            {item.label}
                        </Text>
                        {item.badge && (
                            <Text
                                p={'0.2rem 0.5rem'}
                                bg={DefaultColor.black.label}
                                fsize={FontSize.fSize6.label}
                                color={DefaultColor.white.label}
                                bdradius={BasicVar.bRadius.label}
                            >
                                {item.badge}
                            </Text>
                        )}
                    </FBox>
                ))}
            </FBox>
            {
                children
            }
        </FBox>
    )
}

export default Tab;