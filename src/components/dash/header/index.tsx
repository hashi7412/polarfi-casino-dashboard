import React from "react";
import FBox from "elements/fbox";
import { BasicVar, HeaderVar, styledShadow } from "styles/variables";
import AssetInfo from "./components/AssetInfo";
import Account from "./components/Account";
import { Box } from "elements";
import Icon from "components/icon";
import useStore from "useStore";
import Dropdown from "components/dropdown";
import Text from "elements/text";

const Header = () => {
	const { isChat, update } = useStore();
	return (
		<FBox
			valign={'center'}
			g={'1rem'}
			h={HeaderVar.h.label}
			p={'0 1.5rem'}
		>
			<AssetInfo />
			<Account />
			<FBox
			>
				<Dropdown
					thumb={(
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
					)}
					space={'0.5rem'}
					position={'absolute'}
					top={'100%'}
					right={"0"}
					w={'320px'}
					p={'0.5rem'}
					bg={BasicVar.bg2.label}
					bShadow={styledShadow}
					bdradius={BasicVar.bRadius1.label}
				>
					<FBox
						as={'ul'}
					>
						<Box
							as={'li'}
							onClick={() => {}}
							p={'0.5rem 1rem'}
							w={'100%'}
							bdradius={BasicVar.bRadius1.label}
							cursor={'pointer'}
							fsize={"0.8rem"}
							hover={{
								bg: BasicVar.bg.label
							}}
						>
							<Text
								other="
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;
									overflow: hidden;
								"
							>
								🔥 We are excited to announce the release of our latest casino game, "Lucky Spins". This thrilling slot machine offers multiple chances to win big! With its engaging graphics and exciting sound effects, "Lucky Spins" is sure to keep you entertained for hours. Don't miss out on your chance to strike it lucky – play now!
							</Text>
						</Box>
					</FBox>
				</Dropdown>
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
		</FBox >
	)
}

export default Header
