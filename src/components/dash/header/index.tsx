import React from "react";
import FBox from "elements/fbox";
import { BasicVar, DefaultColor, HeaderVar } from "styles/variables";
import Text from "elements/text";
import Button from "components/btn";
import { Logo2 } from "elements/logo";
import { FontStyle } from "styles/variables";
import { Box } from "elements";
import Img from "elements/img";
import Icon from "components/icon";
import useStore from "useStore";

const Header = () => {
	const { isChat, update } = useStore();

	return (
		<FBox
			valign={'center'}
			h={HeaderVar.h.label}
			p={'0 1.5rem'}
		>
			<FBox
				flex={1}
				hAlign={'center'}
			>
				<FBox
					valign={'center'}
					hAlign={'space-between'}
					g={'1rem'}
					minW={'20rem'}
					p={'0.5rem 0.7rem'}
					bg={BasicVar.bg2.label}
					bdradius={BasicVar.bRound.label}
				>
					<FBox
						flex={1}
						valign={'center'}
						g={'0.5rem'}
					>
						<Logo2 w="1.8rem" h="1.8rem" />
						<FBox
							valign={'center'}
							g={'0.5rem'}
						>
							<Text
								fWeight={FontStyle.bold.label}
							>
								1,000,000
							</Text>
							<Text
								color={DefaultColor.success.label}
							>
								POL
							</Text>
						</FBox>
					</FBox>
					<Button>Wallet</Button>
				</FBox>
			</FBox>
			<FBox
				valign={'center'}
				g={'1rem'}
			>
				<FBox
					valign={'center'}
					g={'0.5rem'}
					bg={BasicVar.bg2.label}
					bdradius={BasicVar.bRound.label}
					p={'0.5rem 1rem 0.5rem 0.5rem'}
				>
					<FBox>
						<Box
							w={'40px'}
							h={'40px'}
							bdradius={BasicVar.bRound.label}
							overflow={'hidden'}
							bd={`1px solid ${BasicVar.color.label}`}
						>
							<Img w={'40px'} h={'40px'} src={'/avatar.png'} />
						</Box>
					</FBox>
					<Text
						color={BasicVar.color2.label}
					>Nickname</Text>
				</FBox>
				<FBox
				>
					<Box
						as={'button'}
						bg={'none'}
						bd={'none'}
						otl={'none'}
						color={BasicVar.color2.label}
						hover={{
							color: BasicVar.color.label
						}}
					>
						<Icon
							width="2rem"
							height="2rem"
							icon="Notification"
						/>
					</Box>
					<Box
						as={'button'}
						bg={'none'}
						bd={'none'}
						otl={'none'}
						onClick={() => update({ isChat: !isChat })}
						color={isChat ? BasicVar.color.label : BasicVar.color2.label}
						hover={{
							color: BasicVar.color.label
						}}
					>
						<Icon
							width="2rem"
							height="2rem"
							icon="Chat"
						/>
					</Box>
				</FBox>
			</FBox>
		</FBox >
	)
}

export default Header
