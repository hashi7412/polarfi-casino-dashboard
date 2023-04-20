import Icon from "components/icon";
import { Box } from "elements";
import FBox from "elements/fbox";
import Heading from "elements/heading";
import Text from "elements/text";
import React from "react";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";

const Header = () => {
	const address = '0x61dd481a114a2e761c554b641742c973867899d3';
	return (
		<Box
			p={'1.5rem'}
			bdb={`2px solid ${BasicVar.border.label}`}
		>
			<Heading
				level={1}
				fSize={FontSize.fSize3.label}
				txtTrans={'uppercase'}
				mb={'0.5rem'}
				fFamily={BasicVar.font2.label}
			>
				Aster
				<Text color={DefaultColor.warning.label}>Fi</Text>
			</Heading>
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
