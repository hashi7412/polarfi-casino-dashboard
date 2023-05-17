import React, { Fragment } from "react";
import Button from "components/btn";
import Input from "components/input";
import Heading from "elements/heading";
import Link from "elements/link";
import Text from "elements/text";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";

interface PropsType {
    setIsSignin: any
}

const SignInForm = ({ setIsSignin }: PropsType) => {
    return (
        <Fragment>
            <Heading
                level={2}
                pt={'1.5rem'}
                pb={'1.5rem'}
            >Sign In</Heading>
            <Text alignSelf={'flex-start'} mb={'0.5rem'}>Login with your account</Text>
            <Input
                placeholder="Username or Email"
                bg={DefaultColor.white.label}
                color={BasicVar.bg.label}
                mb={'1rem'}
            />
            <Input
                type={'password'}
                placeholder="Password"
                bg={DefaultColor.white.label}
                color={BasicVar.bg.label}
            />
            <Link
                to="#"
                alignSelf={'flex-end'}
                mb={'2rem'}
                color={DefaultColor.warning.label}
                fSize={FontSize.fSize6.label}
                underline
            >Forgot your password</Link>
            <Button
                onClick={() => { }}
                alignSelf={'stretch'}
                mb={'1rem'}
            >
                Sign In
            </Button>
            <Link
                to="#"
                onClick={() => setIsSignin(false)}
                mb={'2rem'}
                color={DefaultColor.warning.label}
                underline
            >Create an Account</Link>
        </Fragment>
    )
}

export default SignInForm;
