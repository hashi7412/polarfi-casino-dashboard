import React, { Fragment } from "react";
import FBox from "elements/fbox";
import Text from "elements/text";
import { BasicVar, DefaultColor, styledShadow } from "styles/variables";
import Button from "components/btn";
import AccountModal from "./AccountModal";

const PublicAccount = () => {

    const [isModal, setIsModal] = React.useState(false);
    const [isSignin, setIsSignin] = React.useState(true);

    const toAuth = (flag: boolean) => {
        setIsSignin((prev) => flag);
        setIsModal(true)
    }

    return (
        <Fragment>
            <FBox
                g={'1.5rem'}
            >
                <Button
                    onClick={() => toAuth(true)}
                    bg={'transparent'}
                    color={BasicVar.color2.label}
                    p={'0'}
                >
                    <Text
                        color={BasicVar.color2.label}
                    >Sign In</Text>
                </Button>
                <Button
                    onClick={() => toAuth(false)}
                    bg={DefaultColor.success.label}
                    bShadow={styledShadow}
                    color={BasicVar.color.label}
                >
                    <Text
                    >Sign Up</Text>
                </Button>
            </FBox>
            <AccountModal isModal={isModal} setIsModal={setIsModal} isSignin={isSignin} setIsSignin={setIsSignin} />
        </Fragment>
    )
}

export default PublicAccount;