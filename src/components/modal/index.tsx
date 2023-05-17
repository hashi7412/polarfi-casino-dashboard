import React from "react";
import { Box } from "elements";
import { BasicVar } from "styles/variables";
import FBox from "elements/fbox";

interface ModalProps extends ElementDefaultProps {
    isModal: boolean
    close: () => void
    hideBg?: boolean
    children?: any
}

const Modal: React.FC<ModalProps> = ({
    isModal,
    close,
    hideBg,
    children,
    ...rest
}) => {

    return !isModal ? null : (
        <FBox
            position={'absolute'}
            top={'0'}
            left={'0'}
            valign={'center'}
            hAlign={'center'}
            zIndex={9999}
            w={'100%'}
            h={'100%'}
        >
            <FBox
                {...rest}
            >
                {children}
            </FBox>
            <Box
                position={'absolute'}
                top={'0'}
                left={'0'}
                zIndex={-1}
                w={'100%'}
                h={'100%'}
                bg={!hideBg ? BasicVar.bgOpacity.label : null}
                backdrop={!hideBg ? 'blur(2px)' : null}
                onClick={close}
            />
        </FBox>
    )
}

export default Modal