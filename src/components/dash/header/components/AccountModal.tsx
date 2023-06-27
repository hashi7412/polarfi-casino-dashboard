import React from "react";
import Modal from "components/modal";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import FBox from "elements/fbox";
import { BasicVar, styledShadow } from "styles/variables";
import { Logo2 } from "elements/logo";

interface PropsType {
    isModal: boolean
    setIsModal: any
    isSignin: boolean
    setIsSignin: any
}

const AccountModal = ({ isModal, setIsModal, isSignin, setIsSignin }: PropsType) => {

    return (
        <Modal isModal={isModal} close={() => setIsModal(false)}>
            <FBox
                as={'form'}
                fDir={'column'}
                valign={'center'}
                bg={BasicVar.bg.label}
                w={'500px'}
                p={'5rem 2rem 2rem'}
                bShadow={styledShadow}
                bdradius={BasicVar.bRadius1.label}
                fFamily={BasicVar.font4.label}
            >
                <Logo2 w="4rem" h="4rem" />
                {isSignin ? <SignInForm setIsSignin={setIsSignin} /> : <SignUpForm setIsSignin={setIsSignin} />}
            </FBox>
        </Modal>
    )
}

export default AccountModal;
