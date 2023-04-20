import React from "react";
import Icon from "components/icon";
import { Box } from "elements";
import FBox from "elements/fbox";
import Logo from "elements/logo";
import Text from "elements/text";
import { BasicVar, DefaultColor } from "styles/variables";

const Header = () => {
	const address = '0x61dd481a114a2e761c554b641742c973867899d3';
	return (
		<Box
			p={'1.5rem'}
			bdb={`2px solid ${BasicVar.border.label}`}
		>
			<Logo />
			<FBox
				color={DefaultColor.warning.label}
				hAlign={'space-between'}
			>
				<FBox
					valign={'center'}
					g={'0.5rem'}
				>
					<Icon icon={'CircleFillUser'} />
					<Text>{address.slice(0, 5) + '...' + address.slice(-4)}</Text>
				</FBox>
				<Icon icon={"Logout"} />
			</FBox>
		</Box>
	)
}

export default Header
