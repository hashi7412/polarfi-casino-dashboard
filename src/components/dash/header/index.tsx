import React from "react";
import FBox from "elements/fbox";
import { BasicVar, HeaderVar } from "styles/variables";
import AssetInfo from "./components/AssetInfo";
import Account from "./components/Account";
import { Box } from "elements";
import Icon from "components/icon";
import useStore from "useStore";

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
		</FBox >
	)
}

export default Header
