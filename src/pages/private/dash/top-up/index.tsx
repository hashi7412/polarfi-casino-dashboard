import React from "react";
import FBox from "elements/fbox";
import Text from "elements/text";
import Input from "components/input";
import { BasicVar, DefaultColor, FontStyle } from "styles/variables";
import { Box } from "elements";
import Button from "components/btn";
import Modal from "components/modal";
import Heading from "elements/heading";

const Topup = () => {
    const [balance, setBalance] = React.useState<number>(0);
    const [isModal, setIsModal] = React.useState<boolean>(false);

    React.useEffect(() => {
        setBalance(0);
    }, [])

    return (
        <React.Fragment>
            <FBox
                valign={'center'}
                g={'2rem'}
                mb={'1rem'}
            >
                <Text>Your Balance: </Text>
                <Box
                    maxW={'500px'}
                >
                    <Input
                        rightSide={(
                            <Text
                                color={BasicVar.color2.label}
                                fWeight={FontStyle.bold.label}
                            >POL</Text>
                        )}
                        value={balance}
                        onChange={(e: any) => setBalance(e.target.value)}
                    />
                </Box>
            </FBox>
            <FBox
                g={'0.5rem'}
            >
                <Button
                    bg={DefaultColor.success.label}
                    onClick={() => setIsModal(true)}
                >
                    Deposit
                </Button>
                <Button>
                    Withdraw
                </Button>
            </FBox>
            <Modal isModal={isModal} close={() => setIsModal(false)}>
                <Box 
                    bg={BasicVar.bg.label}
                    p={"2rem 2rem"}
                    bdradius={"1rem"}
                >
                    <Heading
                        level={3}
                        mb={"2rem"}
                        tAlign={"center"}
                    >
                        Top up balance
                    </Heading>
                    <FBox
                        fDir={"column"}
                        g={"1rem"}
                    >
                        <Input
                            rightSide={(
                                <Text
                                    color={BasicVar.color2.label}
                                    fWeight={FontStyle.bold.label}
                                >POL</Text>
                            )}
                            value={balance}
                            onChange={(e: any) => setBalance(e.target.value)}
                        />
                        <Button>Top Up</Button>
                    </FBox>
                </Box>
            </Modal>
        </React.Fragment>
    )
}

export default Topup;