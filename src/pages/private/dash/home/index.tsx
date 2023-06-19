import Button from "components/btn";
import Tab from "components/tab";
import Table from "components/table";
import { _DashBannerImage } from "constants/image.constant";
import { Box } from "elements";
import FBox from "elements/fbox";
import Heading from "elements/heading";
import Text from "elements/text";
import React from "react";
import { BasicVar, DefaultColor, FontSize, styledShadow } from "styles/variables";
import useStore from "useStore";

const items: CategoryItemType[] = [
	{ label: "My Bets", key: 'mybets' },
	{ label: "All Bets", key: 'allbets' },
	{ label: "High Rollers", key: 'highrollers' }
]

const fields = [
	{ label: "Game", key: 'name', render: (v: any) => (<Text>{v}</Text>) },
	{ label: "Time", key: 'time', render: (v: any) => (<Text>{v}</Text>) },
	{ label: "Bet Amount", key: 'betAmount', render: (v: any) => (<Text>{v}</Text>) },
	{ label: "Multiplier", key: 'multiplier', render: (v: any) => (<Text>{v}</Text>) },
	{ label: "Payout", key: 'payout', render: (v: any) => (<Text>{v}</Text>) },
]

const data = [
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
	{ name: 'Slot Machine', time: '1 mins ago', betAmount: 10000000, multiplier: 3.4, payout: 1000000 },
]

const DashHome = () => {

	const {T} = useStore();
	const [tabIndex, setTabIndex] = React.useState(0);

	return (
		<React.Fragment>
			<Box
				w={'100%'}
				h={'285px'}
				bg={`no-repeat url(${_DashBannerImage})`}
				bgColor={'white'}
				bgSize={'cover'}
				bgPos={'right'}
			>
				<FBox
					fDir={'column'}
					hAlign={'center'}
					valign={'flex-start'}
					g={'1rem'}
					h={'100%'}
					w={'70%'}
					p={'0 2rem'}
					mb={'1rem'}
				>
					<Heading
						level={1}
						mb={'0'}
						fsize={FontSize.fSize1.label}
						fFamily={BasicVar.font2.label}
					>
						<Text
							color={DefaultColor.primary.label}
							txtTrans={'uppercase'}
							tShadow={`0 0 2px #5559`}
						>
							Welcome to &nbsp;
						</Text>
						<Text
							color={DefaultColor.warning.label}
							txtTrans={'uppercase'}
							tShadow={`0 0 2px #5559`}
						>
							Polarfi Jackpot
						</Text>
					</Heading>
					<Text
						mb={'0'}
						maxW={'400px'}
						tShadow={styledShadow}
					>
						${T("home.hero.desc")}
					</Text>
					<Button
						bg={DefaultColor.success.label}
					>
						Deposit
					</Button>
				</FBox>
				<Tab
					items={items}
					activeKey={tabIndex}
					setActiveKey={(i: CategoryItemType, k: number) => setTabIndex(k)}
				>
					<Table
						fields={fields}
						data={data}
					/>
				</Tab>
			</Box>
		</React.Fragment>
	)
}

export default DashHome
