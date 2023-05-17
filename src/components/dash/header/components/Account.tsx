import React from "react";
import FBox from "elements/fbox";
import useStore from "useStore";
import PublicAccount from "./PublicAccount";
import PrivateAccount from "./PrivateAccount";

const Account = () => {
	const { user } = useStore();
    return (
        <FBox
            valign={'center'}
            g={'1rem'}
        >
            {user === null ? (
                <PublicAccount />
            ) : (
                <PrivateAccount />
            )}
        </FBox>
    )
}

export default Account;
